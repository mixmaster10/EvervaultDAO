import { ethers } from "ethers";
import { LpReserveContract } from "../abi";
import { busdeve } from "../helpers/bond";
import { Networks } from "../constants/blockchain";

export async function getMarketPrice(networkID: Networks, provider: ethers.Signer | ethers.providers.Provider): Promise<number> {
    const busdeveAddress = busdeve.getAddressForReserve(networkID);
    const pairContract = new ethers.Contract(busdeveAddress, LpReserveContract, provider);
    const reserves = await pairContract.getReserves();
    const marketPrice = reserves[0] / reserves[1];
    return marketPrice;
}
