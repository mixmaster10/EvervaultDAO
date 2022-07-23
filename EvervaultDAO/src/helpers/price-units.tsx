import { SvgIcon } from "@material-ui/core";
import { ReactComponent as BusdImg } from "../assets/tokens/BUSD.svg";
import { IAllBondData } from "../hooks/bonds";
import { busd } from "../helpers/bond";

export const priceUnits = (bond: IAllBondData) => {
    if (bond.name === busd.name) return <SvgIcon component={BusdImg} viewBox="0 0 32 32" style={{ height: "15px", width: "15px" }} />;

    return "$";
};
