# Notes on project set up for development

## 
We are following [OpenZeppelin Lear](https://docs.openzeppelin.com/learn/) for the project set up.

## Clone course git repo
```
git clone https://github.com/BDU-NFT-Course/DEX-Course.git

cd DEX-Course
```
##  Set Up dev project with hardhat
```
npm init -y
npm install --save-dev hardhat
npx hardhat 
  - create empty hardhat project 
```
## Set up connection to a testnet
Set up .secrets.json
```
{
    "alchemyAPIKey" : "https://eth-rinkeby.alchemyapi.io/v2/<rinkeby_private_key>",
    "ethereumAccount" : "<rinkeby_account_secret_key>",
    "etherscanAPIKey" : "<etherscan_api_key>"
}
```
## Install dependencies

We will need these packages, install them.
```
npm install --save-dev @openzeppelin/contracts
npm install --save-dev @nomiclabs/hardhat-ethers ethers
npm install --save-dev @nomiclabs/hardhat-etherscan
```

## Compile, deploy and verify the Factory and Router contracts

Read and follow the detailed instructions in [How to build a DEX like Uniswap](https://blockchain.news/wiki/how-to-build-an-uniswap-exchange). 

**Example commands.** 
Make sure that you modify with your arguments.

1. Compile, deploy and verify the Factory contract. Start with modifying ```deploy-UniswapV2Factory.js``` to give the correct constructor arguents.Also, give the correct constructor arguments on the verify commend below.

```
 npx hardhat run --network rinkeby scripts/deploy-UniswapV2Factory.js
 npx hardhat verify --network rinkeby 0x5c84d4f3C98E2971AC71e88B5990B003a8a44d38 '0x641C0493C70C3acB36d7331f8888d3b2Fa53E113'
```

2. Modify line 700 in contracts/UniswapV2Router02.sol to match INIT_CODE_PAIR_HASH from your Factory contract.

3. Then, compile, deploy and verify the Router contract. Start with modifying ```deploy-UniswapV2Router.js``` to give the correct constructor arguents.Also, give the correct constructor arguments on the verify commend below.

```
npx hardhat run scripts/deploy-UniswapV2Router02.js 
npx hardhat verify --network rinkeby  0x319B2Dd7091ad4bABed23A41F614a1bE79380005 '0x5c84d4f3C98E2971AC71e88B5990B003a8a44d38' '0xc778417E063141139Fce010982780140Aa0cD5Ab'
```
## Set up th Front End
```
cd ..
git clone https://github.com/swappityswap-dev/SwappitySwap-Interface
```