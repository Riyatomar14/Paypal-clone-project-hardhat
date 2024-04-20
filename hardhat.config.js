
const { HardhatUserConfig } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "lHKDs2rJRWar0UkkaZYIPAC7E5UHA_M9";
const SEPOLIA_PRIVATE_KEY = "63e0c4f74207abf2927d12d82f00b5b4630f7006a8ad6dddea69116d381165cb";

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: "CABM24C9HZ48NHFC257WZJJA1AJ71VV7FP", // Corrected 'apikey' to 'apiKey'
  }
};
