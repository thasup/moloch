require("dotenv").config();
const hardhat = require("hardhat/config");
const { usePlugin } = hardhat;

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-truffle5");
require("./scripts/moloch-tasks");
require("./scripts/pool-tasks");

const { ALCHEMY_API_KEY, MUMBAI_PRIVATE_KEY, POLYGONSCAN_API_KEY } =
  process.env;

module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    develop: {
      url: "http://localhost:8545",
      deployedContracts: {
        moloch: "",
        pool: "",
      },
    },
    polygon_mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${MUMBAI_PRIVATE_KEY}`],
      deployedContracts: {
        moloch: "",
        pool: "",
      },
    },
    /* mainnet: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [MAINNET_PRIVATE_KEY],
      deployedContracts: {
        moloch: "0x1fd169A4f5c59ACf79d0Fd5d91D1201EF1Bce9f1", // The original Moloch
        pool: ""
      }
    }, */
    coverage: {
      url: "http://localhost:8555",
    },
  },
  solidity: {
    version: "0.5.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
};
