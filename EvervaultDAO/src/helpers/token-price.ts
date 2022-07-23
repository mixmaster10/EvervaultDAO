import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2,olympus,magic-internet-money,tether,safeshiba,busd&vs_currencies=usd";
    const { data } = await axios.get(url);
    cache["SAFESHIB"] = data["safeshiba"].usd;
    cache["BUSD"] = data["busd"].usd;
    cache["EVE"] = 0.0000000001;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
