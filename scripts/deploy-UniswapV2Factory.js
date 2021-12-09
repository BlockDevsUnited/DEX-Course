// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const MYContract = await ethers.getContractFactory('UniswapV2Factory');
  console.log('Deploying Contract...');
  const myContract = await MYContract.deploy('0x641C0493C70C3acB36d7331f8888d3b2Fa53E113');
  await myContract.deployed();
  console.log('Contract deployed to:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

