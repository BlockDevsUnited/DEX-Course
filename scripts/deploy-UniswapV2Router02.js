// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const MYContract = await ethers.getContractFactory('UniswapV2Router02');
  console.log('Deploying Contract...');
  const myContract = await MYContract.deploy('0x5c84d4f3C98E2971AC71e88B5990B003a8a44d38','0xc778417E063141139Fce010982780140Aa0cD5Ab');
  await myContract.deployed();
  console.log('Contract deployed to:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

