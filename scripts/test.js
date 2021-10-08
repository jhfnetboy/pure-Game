const hre = require("hardhat");
const config = require('./test_config.json');

async function main() {
    const rarity_json = require('../src/artifacts/contracts/rarity.sol/rarity.json')
    const provider = hre.ethers.getDefaultProvider(config['localhost'])
    // const provider = hre.ethers.getDefaultProvider(config['network']);
    // console.log(provider)
    const wallet = new hre.ethers.Wallet(config["private_key"], provider);
    console.log(`Loaded wallet ${wallet.address}`);
    const address = config["contract_address"];
    const abi = rarity_json.abi;
    rarity_contract = new hre.ethers.Contract( address , abi , wallet );
    // console.log(rarity_contract)
    let nsummoner = await rarity_contract.functions.next_summoner()
    // rarity_contract.functions.
    // console.log(nsummoner)
    console.log('end')

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


