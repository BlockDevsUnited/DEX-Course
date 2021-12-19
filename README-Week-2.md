# Integrate your own contracts into Uniswap Fork

## deploy your own Factory and Router smart contracts
You should already have cloned the course repo from Week 1. If not, start wil cloning it:
```
git clone https://github.com/BlockDevsUnited/DEX-Course-u-exchange
cd DEX-Course-u-exchange
```

### Deploy Factory contract
Copy contracts/UExchangeFactory_flat.sol to Remix

Compile Contract
- Change Compiler version to 0.5.16

Run&Deploy contract
- Environment: Injected Web3
- Account: Copy your xDai address from metamask
- Contract: ```UExchangeFactory - contracts/UExchangeFactory_flat.sol```
- Deploy: Takes one argument - expand to enter it
  - _FEETOSETTER: you can copy your address on xDai from metamask

Verify Contract
- Find the contract on https://blockscout.com 
- Go to "Code" tab and click on "Verify&Publish"
- Choose "Via flattened source code" and click "Next"
- Fill in the form. For "Try to guess arguments", choose "YES" and click on "Verify"

In ```scripts/contracts_info.json```
- update factory_contract_address with the address of the newly deployed contract

### Calculate INIT_CODE_PAIR_HASH
Go back to Remix and switch to the compile Tab.
-  under the blue button "Compile UExchangeFactory_flat.sol" choose CONTRACT: "UExchangePair(UExchangeFactory_flat.sol)"
- Then click on "Bytecode" to copy it
- Open ```scripts/pair_bycode.json``` file and complete replace its contents with the bycode that you copied in the previous step
- Open a terminal and run ```node scripts/get_pair_hash.js```
- In ```scripts/contracts_info.json``` update init_code_pair_hash with the output from the previous line

### Deploy Router Contract

Copy contracts/UExchangeRouter_flat.sol to Remix
- Search the contract for hex to find this line (around 129):
```
hex'fbc46437b443cd8d82755f5a02d9fc3e51b9ae6ddc401bd1158b1cb07013e265' // init code hash
```
- Replace the hash with the PAIR_INIT_CODE_HASH from your previous step

Compile Contract
- Change Compiler version to 0.6.6
- Enable optimization: 200

Run&Deploy contract
- Environment: Injected Web3
- Account: Copy your xDai address from metamask
- Contract: ```UExchangeRouter02 - contracts/UExchangeRouter_flat.sol```
- Deploy: Takes two arguments - expand to enter them
  - _FACTORY: This is the address of your factory contract that you deployed in the previous step. Copy it from blockscout.com.
  - _WETH: This is the WETH contract address on xdai chain. You can find it on [blockscout.com](https://www.blockscout.com/xdai/mainnet/token/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1/token-transfers)
- Verify contract (optional) 

In ```scripts/contracts_info.json``` update "router_contract_address" with the address of our deployed router contract

## Update SDK
Clone the source repository locally
```bash
git clone https://github.com/UdotCASH/u-exchange-sdk
cd u-exchange-sdk
```
In ```src/constants.ts``` update these two lines with your contract values:
```
export const FACTORY_ADDRESS = '0xF3eAD80d7ad58CbA12F73F295d0Dc845c0dA2B39'
export const INIT_CODE_HASH = '0xfbc46437b443cd8d82755f5a02d9fc3e51b9ae6ddc401bd1158b1cb07013e265'
```
In ```package.json``` update package version

Next, prepare the package and publish to npmjs
1. Install dependencies ```npm install```
1. Login to npm: ```npm login```
1. Publish ```npm publish --access public```
1. Verify that your package is in https://www.npmjs.com/package/ by searching for it.

## Integrate the interface

### Update contract info in the interface source
Go to the interface folder
```
cd DEX-Course-u-exchange
```

In ```package.json```
- update u-exchange-sdk package with the name and verion of your SDK package deployed in previous step
- run `yarn`

In src folder update with the sdk package
```
cd src
find . -type f -print -exec sed -i s,'\@udotcash\/u\-exchange\-sdk','\@violeta\.at\.bww\/dex\-course\-u\-exchange\-sdk',g {} \;
```

In ```src/constants/v1/index.ts```
- update router address
- update u-exchange package

### Test the interface locally
In the terminal start the interface
```
yarn
yarn start
```
Then open in your browser http://localhost:3000

Follow [Week 1 tutorial](README-Week-1.md) to publish the interface to github pages