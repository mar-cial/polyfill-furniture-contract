require('@nomiclabs/hardhat-ethers');
require("dotenv").config();
require('@openzeppelin/hardhat-upgrades');

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [WALLET_PRIVATE_KEY]
    }
  }
};
