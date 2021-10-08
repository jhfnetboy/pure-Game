import { useState } from 'react';
import { ethers } from 'ethers'
import Rarity from '../src/artifacts/contracts/rarity.sol/rarity.json'

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

function mainOperation() {
  const [Summoner, setSummoner] = useState()

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // call the smart contract, read the Summoner value
  async function fetchSummoner() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Rarity.abi, provider)
      try {
        const data = await contract.()
        console.log('summoner: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  // call the smart contract, send an update
  // async function setGreeting() {
  //   if (!greeting) return
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner()
  //     const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
  //     const transaction = await contract.setGreeting(greeting)
  //     await transaction.wait()
  //     fetchGreeting()
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchSummoner}>Fetch Summoner</button>
        {/* <button onClick={setGreeting}>Set Greeting</button> */}
        <input onChange={e => setSummoner(e.target.value)} placeholder="Set summoner" />
      </header>
    </div>
  );
}

export default Operation;
