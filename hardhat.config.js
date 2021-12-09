//require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

const { alchemyAPIKey, ethereumAccount, etherscanAPIKey} = require('./.secrets.json');
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
//  solidity: "0.8.4",

// uncomment line below for UniswapV2Factory.sol
//  solidity: "0.5.16",

// incomment line below for UniswapV2Router02.sol
//  solidity: "0.6.6",

solidity: {
  compilers: [
    {
      version: "0.5.16"
    },
    {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100,
        },
      },
    }
  ],
  overrides: {
    "contracts/UniswapV2Factory.sol": {
      version: "0.5.16",
    },
    "contracts/UniswapV2Router02.sol": {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100,
        },
      },
    }
   }
  },

  networks: {
    hardhat: {
    },
    rinkeby: {
      
      // On https://dashboard.alchemyapi.io/ display the key with "View Key" button
      url: alchemyAPIKey,
      // In methamask, choose "Account details", then "Export Private Key".
      accounts: [ethereumAccount]
    },
    polygon: {
      
      // On https://dashboard.alchemyapi.io/ display the key with "View Key" button
      url: alchemyAPIKey,
      // In methamask, choose "Account details", then "Export Private Key".
      accounts: [ethereumAccount]
    }
  },
  etherscan: {
    apiKey: etherscanAPIKey
  }
};
