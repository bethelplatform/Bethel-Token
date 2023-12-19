// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");
require("@ericxstone/hardhat-blockscout-verify");
const { SOLIDITY_VERSION, EVM_VERSION } = require("@ericxstone/hardhat-blockscout-verify");

require('dotenv').config()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.23",
  networks: {
    BethelzkEVM: {
      url: 'https://rpc-testnet-zkevm.bethel.network',
      accounts: [process.env.PRIVATE_KEY || 'PRIVATE_KEY_REDACTED'],
    }
  },
    blockscoutVerify: {
      blockscoutURL: "https://testnet-zkevm.bethel.network",
      contracts: {
        "BETHEL": {
          compilerVersion: process.env.SOLIDITY_VERSION ? SOLIDITY_VERSION[process.env.SOLIDITY_VERSION] : SOLIDITY_VERSION.SOLIDITY_V_8_23,
          optimization: false,
          evmVersion: process.env.EVM_VERSION ? EVM_VERSION[process.env.EVM_VERSION] : EVM_VERSION.EVM_PARIS,
          optimizationRuns: 999999,
        },
      },
    },
  etherscan: {
    apiKey: {
      BethelzkEVM: process.env.ETHERSCAN_API_KEY
    },
    customChains: [
      {
        network: "BethelzkEVM",
        chainId: 1122,
        urls: {
          apiURL: "https://testnet-zkevm.bethel.network/api",
          browserURL: "https://testnet-zkevm.bethel.network"
        }
      }
    ]
  }
};