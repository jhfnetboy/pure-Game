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




  // async function main() {

  //   const [deployer] = await ethers.getSigners();
  
  //   console.log(
  //     "Deploying contracts with the account:",
  //     await deployer.getAddress()
  //   );
    
  //   console.log("Account balance:", (await deployer.getBalance()).toString());
  
  //   const Token = await ethers.getContractFactory("Token");
  //   const token = await Token.deploy();
  
  //   await token.deployed();
  
  //   console.log("Token address:", token.address);
  // }
  
  // main()
  //   .then(() => process.exit(0))
  //   .catch(error => {
  //     console.error(error);
  //     process.exit(1);
  //   });
