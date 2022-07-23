import { ethers } from "ethers";
import { getAddresses } from "../../constants";
import { StakingContract, LootTokenContract, EveTokenContract, DaoContract } from "../../abi";
import { setAll } from "../../helpers";
import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonRpcProvider } from "@ethersproject/providers";
import { getMarketPrice, getTokenPrice } from "../../helpers";
import { RootState } from "../store";
import allBonds from "../../helpers/bond";

interface ILoadAppDetails {
    networkID: number;
    provider: JsonRpcProvider;
}

export const loadAppDetails = createAsyncThunk(
    "app/loadAppDetails",
    //@ts-ignore
    async ({ networkID, provider }: ILoadAppDetails) => {
        const busdPrice = getTokenPrice("BUSD");
        const addresses = getAddresses(networkID);

        const stakingContract = new ethers.Contract(addresses.STAKING_ADDRESS, StakingContract, provider);
        const currentBlock = await provider.getBlockNumber();
        const currentBlockTime = (await provider.getBlock(currentBlock)).timestamp;
        const lootContract = new ethers.Contract(addresses.LOOT_ADDRESS, LootTokenContract, provider);
        const eveContract = new ethers.Contract(addresses.EVE_ADDRESS, EveTokenContract, provider);

        const marketPrice = ((await getMarketPrice(networkID, provider)) / Math.pow(10, 9)) * busdPrice;

        const totalSupply = (await eveContract.totalSupply()) / Math.pow(10, 9);
        const circSupply = (await lootContract.circulatingSupply()) / Math.pow(10, 9);

        const stakingTVL = circSupply * marketPrice;
        const marketCap = totalSupply * marketPrice;

        const tokenBalPromises = allBonds.map(bond => bond.getTreasuryBalance(networkID, provider));
        const tokenBalances = await Promise.all(tokenBalPromises);
        const treasuryBalance = tokenBalances.reduce((tokenBalance0, tokenBalance1) => tokenBalance0 + tokenBalance1, 0);

        const tokenAmountsPromises = allBonds.map(bond => bond.getTokenAmount(networkID, provider));
        const tokenAmounts = await Promise.all(tokenAmountsPromises);
        const rfvTreasury = tokenAmounts.reduce((tokenAmount0, tokenAmount1) => tokenAmount0 + tokenAmount1, 0);
        const eveBondsAmountsPromises = allBonds.map(bond => bond.getEveAmount(networkID, provider));
        const eveBondsAmounts = await Promise.all(eveBondsAmountsPromises);
        const eveAmount = eveBondsAmounts.reduce((eveAmount0, eveAmount1) => eveAmount0 + eveAmount1, 0);
        const eveSupply = totalSupply - eveAmount;
        const rfv = rfvTreasury / eveSupply;

        const epoch = await stakingContract.epoch();
        const stakingReward = epoch.distribute;
        const circ = await lootContract.circulatingSupply();
        const stakingRebase = stakingReward / circ;
        const fiveDayRate = Math.pow(1 + stakingRebase, 5 * 3) - 1;
        const stakingAPY = Math.pow(1 + stakingRebase, 365 * 3) - 1;

        const currentIndex = await stakingContract.index();
        const nextRebase = epoch.endTime;
        const treasuryRunway = rfvTreasury / circSupply;
        const runway = Math.log(treasuryRunway) / Math.log(1 + stakingRebase) / 3;

        return {
            // currentIndex: currentIndexNumber(ethers.utils.formatUnits(currentIndex, "gwei")) / 4.5,
            currentIndex: currentIndex,
            totalSupply,
            marketCap,
            currentBlock,
            circSupply,
            fiveDayRate,
            treasuryBalance,
            stakingAPY,
            stakingTVL,
            stakingRebase,
            marketPrice,
            currentBlockTime,
            nextRebase,
            rfv,
            runway,
        };
    },
);

const initialState = {
    loading: true,
};

export interface IAppSlice {
    loading: boolean;
    stakingTVL: number;
    marketPrice: number;
    marketCap: number;
    circSupply: number;
    currentIndex: string;
    currentBlock: number;
    currentBlockTime: number;
    fiveDayRate: number;
    treasuryBalance: number;
    stakingAPY: number;
    stakingRebase: number;
    networkID: number;
    nextRebase: number;
    totalSupply: number;
    rfv: number;
    runway: number;
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        fetchAppSuccess(state, action) {
            setAll(state, action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadAppDetails.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loadAppDetails.fulfilled, (state, action) => {
                setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(loadAppDetails.rejected, (state, { error }) => {
                state.loading = false;
                console.log(error);
            });
    },
});

const baseInfo = (state: RootState) => state.app;

export default appSlice.reducer;

export const { fetchAppSuccess } = appSlice.actions;

export const getAppState = createSelector(baseInfo, app => app);
