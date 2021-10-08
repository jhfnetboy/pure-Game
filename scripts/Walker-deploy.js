
const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("Walker");
  const nft = await NFT.deploy();
  await nft.deployed();
  console.log("Walker NFT Factory Contract deployed to:", nft.address);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

// 传入一个钱包地址和通证URI作为参数
//https://app.pinata.cloud/pinmanager
// npx hardhat run scripts/Walker-deploy.js --network matic