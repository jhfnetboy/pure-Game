const { ethers } = require("ethers");
const hre = require("hardhat");
require('dotenv').config();
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS3;
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;

async function main() {
  const NFT = await hre.ethers.getContractFactory("Walker");
  const contract = NFT.attach(CONTRACT_ADDRESS);
  //检查某钱包地址有几个NFT
  const num = await contract.balanceOf(WALLET_ADDRESS)
  console.log("balanceOf,Ownend NFT number: ", parseInt(num,16));
  //检查第一个NFT是哪个钱包持有
  const owner = await contract.ownerOf(1);
  console.log("ownerOf 1,Owner:", owner);

  const uri = await contract.tokenWalkerName(1);
  console.log("tokenWalkerName 1,name: ", uri);
//   const set = await contract._setTokenName(1,"myNameIsShuai");
//   console.log("tokenWalkerName 1,name: ", set);
//   const na = await contract.tokenWalkerName(1);
//   console.log("tokenWalkerName 1,name: ", na);

//   const co = await contract.walkerContribution(1);
//   console.log("walkerContribution 1 is: ", parseInt(co,16));

//   const co1 = await contract._setWalkerContribution(1,15);
//   console.log("_setWalkerContribution 1 set: ", co1);

  const co2 = await contract.walkerContribution(1);
  const co22 = (hre.ethers.BigNumber.from(co2)).toNumber()
  console.log("walkerContribution 1 is: ", co22);
  console.log("walkerContribution 1 is: ", parseInt(co2,16));


//   const uri2 = await contract.tokenMetaData(1);
//   console.log("tokenMetaData 1,URI: ", uri2);
//   const uri3 = await contract.tokenURI(3);
//   console.log("tokenURI 3,URI: ", uri3);

  //测试public 函数
  const name = await contract.name();
  const symbol = await contract.symbol();
//   const totalSupply = await contract.totalSupply();
//   const ownerOf = await contract.ownerOf(2);
//   const approve = await contract.approve('0x4a9a6A3E993458b81a6204dD91Ebb67FcE48Bd90',2);
//   const ownerOf2 = await contract.ownerOf(2);

//   const tokenOfOwnerByIndex = await contract.tokenOfOwnerByIndex(1);//无此函数
//   const symbol = await contract.symbol();
//   const symbol = await contract.symbol();
//   const symbol = await contract.symbol();
//   const symbol = await contract.symbol();
//   const symbol = await contract.symbol();
  
  console.log("name: ", name);
  console.log("symbol: ", symbol);
//   console.log("totalSupply: ", totalSupply);
//   console.log("ownerOf: ", ownerOf);
// //   console.log("approve: ", approve);
//   console.log("ownerOf2: ", ownerOf2);
  
//   console.log("tokenOfOwnerByIndex 1: ", tokenOfOwnerByIndex);
//   console.log("symbol: ", symbol);
//   console.log("symbol: ", symbol);
//   console.log("symbol: ", symbol);
//   console.log("symbol: ", symbol);
//   console.log("symbol: ", symbol);
//   console.log("symbol: ", symbol);
//   console.log("symbol: ", symbol);
//   const uri = await contract.name();


}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
// npx hardhat run scripts/check-WalkerNFT.js --network matic
// console.log(web3.fromWei(balance.toNumber(), "ether" ) );
// 18位小数的转换