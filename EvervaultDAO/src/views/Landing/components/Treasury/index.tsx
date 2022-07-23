import { Link } from "@material-ui/core";
import "./style.scss";

const Treasury = () => (
    <div className="landing-treasury">
        <h1>The EverVault Treasury</h1>
        <p>Multi-Asset Backed</p>
        <div className="landing-treasury-wrap">
            <div className="landing-treasury-stake">
                <span>EVE Staking Rewards</span>
                <h1>Coming soon</h1>
                {/* <Link href="/stake">Stake Now</Link> */}
                <Link href="/">Coming soon</Link>
            </div>
            <span></span>
            <div className="landing-treasury-info">
                <div className="landing-treasury-info-wrap">
                    <h3>Backed by a Dual-Treasury System</h3>
                    <span>A Revolution in Reserve Currencies</span>
                    <p>
                        EverVault is designed with long-term health in mind. All <strong>EVE</strong> minted for staking rewards are backed with a reserve of{" "}
                        <strong>SafeShiba</strong>, <strong>BTC</strong>, <strong>ETH</strong>, <strong>BNB</strong>, and <strong>Stablecoins</strong>.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Treasury;
