const hre = require("hardhat");
async function main() {

const Greeter = await hre.ethers.getContractFactory("Greeter");
console.log('get contract')
const greeter = await Greeter.deploy("Test for deploy on matic");
await greeter.deployed();
console.log("Contract deployed to:", greeter.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//   npx hardhat run scripts/test_deploy.js --network matic
// 0x3864582dF220cCD30846857d260ad7D183DAE85B