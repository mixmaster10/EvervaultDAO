import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import BUSDIcon from "../../assets/tokens/BUSD.svg";
// import AvaxIcon from "../../assets/tokens/AVAX.svg";
import BUSDEVEIcon from "../../assets/tokens/BUSD-EVE.svg";
// import AvaxTimeIcon from "../../assets/tokens/TIME-AVAX.svg";
import EVESAFESHIBIcon from "../../assets/tokens/BUSD-EVE.svg";
// import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";
import { StableBondContract, LpBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const busd = new StableBond({
    name: "busd",
    displayName: "BUSD",
    bondToken: "BUSD",
    bondIconSvg: BUSDIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            // bondAddress: "0x6852ba526d4fa96ee00dfeac073878cde94e61be",
            // bondAddress: "0x09a1f8c5a0b6e54029fe8194664bbc40250ba0c8",
            // bondAddress: "0xbef692d9d4aa77adb80e4db9f8bab006721cf969",
            bondAddress: "0xde9d636030af85559f14d5d11a0ca02427a64249",
            reserveAddress: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
        },
    },
});

// export const wavax = new CustomBond({
//     name: "wavax",
//     displayName: "wAVAX",
//     bondToken: "AVAX",
//     bondIconSvg: AvaxIcon,
//     bondContractABI: WavaxBondContract,
//     reserveContractAbi: StableReserveContract,
//     networkAddrs: {
//         [Networks.BSC]: {
//             bondAddress: "0xE02B1AA2c4BE73093BE79d763fdFFC0E3cf67318",
//             reserveAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
//         },
//     },
// });

export const busdeve = new LPBond({
    name: "busd_eve_lp",
    displayName: "BUSD-EVE LP",
    bondToken: "BUSD",
    bondIconSvg: BUSDEVEIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "0xf2073f81869133Ad4558C5F284E583C2CA54C266",
            reserveAddress: "0xf1428fa2075584048db7e82A1D01E1f1A8e7A5B2",
        },
    },
    lpUrl: "https://pancake.kiemtienonline360.com/#/add/0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7/0xe5d08A0C671416Ca254cDAe8B8D5f08cb911f0B7",
});

export const evesafeshib = new CustomLPBond({
    name: "eve_safeshib_lp",
    displayName: "EVE-SAFESHIB LP",
    bondToken: "SAFESHIB",
    bondIconSvg: EVESAFESHIBIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "0x5dD1d9a10576eE7c9325e79d3e3D859F61A676B3",
            reserveAddress: "0xA35dd1c0D28D92f2E5C0D23C3A41F7fE5FfbeeEC",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/AVAX/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

export default [busd, busdeve, evesafeshib];
