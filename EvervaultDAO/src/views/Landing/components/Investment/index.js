import "./style.scss";
import { ReactComponent as Logo } from "../../../../assets/icons/evervault-nav-header.svg";

const Investment = () => (
    <div className="landing-investment">
        <div className="landing-investment-wrap">
            <Logo />
            <span></span>
            <div>
                <span>(💎,💎)</span>
                <p>EverVault rewards stakers with compounding interest, increasing their EVE holdings over time.</p>
            </div>
        </div>
        <h3>Investment Protection</h3>
        <span>A Treasury that Stands the Test of Eve</span>
        <p>
            EverVault harnesses the power of MemeFi by combining the formidable tokenomics of <strong>SafeShiba</strong> with the ultra sound value of <strong>BTC</strong>,{" "}
            <strong>ETH</strong>, <strong>BNB</strong>, and <strong>Stablecoins</strong> to fill its treasury.
        </p>
    </div>
);

export default Investment;
