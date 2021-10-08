const hre = require("hardhat");
require('dotenv').config();
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS3;
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const NAME = "myWalkerName"
const ConractFactory = "Walker"

async function main() {
  const NFT = await hre.ethers.getContractFactory(ConractFactory);
  const contract = NFT.attach(CONTRACT_ADDRESS);
   const newID = await contract.mint(WALLET_ADDRESS, NAME);
//   console.log("NFT minted:", contract);
  console.log("NFT minted with ID: ", newID);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
// npx hardhat run scripts/mint-walker.js --network matic
// https://mumbai.polygonscan.com/tx/0x5f2d558aaa8df92bcdc2596f4b4ee790f5d1bb26f8584f2b9bdeae5acd1fb4b6
// https://app.pinata.cloud/pinmanager