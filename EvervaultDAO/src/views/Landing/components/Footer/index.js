import "./style.scss";
import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as Logo } from "../../../../assets/icons/evervault-nav-header.svg";
import { ReactComponent as Medium } from "../../../../assets/icons/evervault-social-medium.svg";
import { ReactComponent as Discord } from "../../../../assets/icons/evervault-social-discord.svg";
import { ReactComponent as Twitter } from "../../../../assets/icons/evervault-social-twitter.svg";

const Footer = () => (
    <>
        <div className="landing-footer">
            <div className="landing-footer-main">
                <div className="landing-footer-main-info">
                    <h3>Liquidity Protected</h3>
                    <span>EverVault LP is owned and protected by EverVault itself.</span>
                    <p>
                        The EverVault Treasury has ownership of nearly all the <strong>EVE</strong> liquidity, which helps provide further stability and security for users.
                        Partnering this feature up with our state of the art dual-treasury system, we can overcome any unfavourable market conditions.
                    </p>
                </div>
                <div className="landing-footer-main-liquidity">
                    <div className="landing-footer-main-liquidity-owned">
                        <h2>Coming soon</h2>
                        <h3>Protocol Owned Liquidity</h3>
                    </div>
                    <div className="landing-footer-main-liquidity-total">
                        <h2>Coming soon</h2>
                        <h3>of Total LP Supply</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="landing-footer-social">
            <Link className="landing-footer-item" href="/">
                <Logo />
            </Link>
            <Link className="landing-footer-item" href="https://medium.com/@evervault" target="_blank">
                <Medium />
            </Link>
            <Link className="landing-footer-item" href="https://discord.gg/evervaultdao" target="_blank">
                <Discord />
            </Link>
            <Link className="landing-footer-item" href="https://twitter.com/EverVaultDAO" target="_blank">
                <Twitter />
            </Link>
        </div>
    </>
);

export default Footer;
