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
      accounts: env.PRIVATE_KEY,
    }
  },
    blockscoutVerify: {
      blockscoutURL: "https://testnet-zkevm.bethel.network",
      contracts: {
        "BETHEL": {
          compilerVersion: SOLIDITY_VERSION.env.SOLIDITY_VERSION, // checkout enum SOLIDITY_VERSION
          optimization: false,
          evmVersion: EVM_VERSION.env.EVM_VERSION, // checkout enum EVM_VERSION
          optimizationRuns: 999999,
        },
      },
    },
  etherscan: {
    apiKey: {
      BethelzkEVM: env.ETHERSCAN_API_KEY
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