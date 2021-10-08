const hre = require("hardhat");
require('dotenv').config();
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
  const Contract = await hre.ethers.getContractFactory("Greeter");
  const contract = Contract.attach("0x3864582dF220cCD30846857d260ad7D183DAE85B");
  const msg = await contract.greet();
  console.log("Get this:", msg);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
// npx hardhat run scripts/greeter-test.js --network matic