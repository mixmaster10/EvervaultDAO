require("dotenv").config()
const HDWalletProvider = require("@truffle/hdwallet-provider")

module.exports = {
  networks: {
    bsc_mainnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://bsc-dataseed.binance.org`,
          0,
          1,
          true,
          "m/44'/519'/0'/0/"
        ),
      network_id: 56, // BSC mainnet id
      gas: 1777648, // BSC mainnet has a lower block limit than mainnet
      confirmations: 3, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets ),
      gasPrice: 20 * 10 ** 9, // 20 Gwei,
    },
    bsc_testnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97, // BSC testnet's id
      gas: 7500000, // BSC testnet has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
      gasPrice: 10000000000,
    },
    kovan: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: process.env.MNEMONIC,
          },
          providerOrUrl: `https://kovan.infura.io/v3/${process.env.PROJECT_ID}`,
          pollingInterval: 800,
        }),
      network_id: 42, // Kovan's id
      gas: 12500000, // Ropsten has a lower block limit than mainnet
      gasPrice: 100000000000,
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
      networkCheckTimeout: 100000,
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.10", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
        //  evmVersion: "byzantium"
      },
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: `${process.env.API_KEY}`,
  },
}
