const hre = require("hardhat");
require('dotenv').config();
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
  const NFT = await hre.ethers.getContractFactory("Walker");
  const CONTRACT_ADDRESS = ""
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(1);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(1);
  console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
// npx hardhat run scripts/check.js --network matic