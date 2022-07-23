import { Eve, Logo } from "resources/index"
import "./style.scss"

const Dashboard = () => (
  <div className="dashboard flex flex-column">
    <div className="dashboard-navbar flex">
      <div className="dashboard-navbar-logo flex">
        <Logo /> <span>EverVault</span>
      </div>
      <button>Connect Wallet</button>
    </div>

    <div className="dashboard-main flex flex-column">
      <Logo />
      <h1>$Eve Public Sale</h1>
      <p className="flex">
        <Eve /> 100,000,000 $Eve tokens for sale
      </p>
      <div className="dashboard-main-info grid">
        <div className="flex flex-column">
          <span>Eve Price</span>
          <p>0.38 USDT</p>
        </div>
        <div className="flex flex-column">
          <span>Total Eve</span>
          <p>100,000,000</p>
        </div>
        <div className="flex flex-column">
          <span>Eve Sold</span>
          <p>17,358</p>
        </div>
      </div>
      <div className="dashboard-main-sale flex flex-column">
        <h5>Your Contribution</h5>
        <Eve />
        <label htmlFor="attribution">
          Max Allocation <span>420 USDT</span>
        </label>
        <div className="flex">
          <input id="attribution" type="text" />
        </div>
        <button>Buy</button>
        <p>$EVE Contract Address</p>
        <a
          href="https://bscscan.com/address/0xBd4ec2e896D3c8079590EB37e75Ff98c908222B3"
          target="_blank"
          rel="noreferrer"
        >
          0xBd4ec2e896D3c8079590EB37e75Ff98c908222B3
        </a>
      </div>
    </div>
  </div>
)

export default Dashboard
