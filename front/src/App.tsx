// import logo from './logo.svg';
import './App.css';
// import { Suspense, useEffect, useRef, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import { AppBar } from '../components'
// import Web3ReactManager from '../components/Web3ReactManager'
// import Routes from './routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";
// import Link from 'next / link';
// import wallet_model from '../src/models/wallet_model';//models/wallet_model.ts

// function App(): JSX.Element {
function App(){  

  //   const {web3Loading, getweb3} = wallet_model ();
  //   const [myWeb3, setMyWeb3] = useState ();

  // async function connectWallet () {
  //   // ​    await getweb3().then((response) => {
  //   //   ​		setMyWeb3 (response);
  //     const web3con = await getweb3()
  //     setMyWeb3 (response)
  //     // ​   response.eth.getAccounts().then((result) => (
  //     //       console.log (result)
  //     //     ))      
  //     // })  
  //   }

    const address = "0x0bE9d4386f58022c27B0Fb035c46de7c5800938F" //should input from page
    const walkerName = "testWalkerName" //should input from page

    async function mintWalker() {
      // if (!chainId) return
      const walker_json = require('../src/') ///src/artifacts/contracts/Walker.sol/Walker.json
      console.log(walker_json)
      // const provider = hre.ethers.getDefaultProvider(config['network'])
      // console.log(provider)
    }
    const userState = null
    let end = false
    let i = 0
    const txtList = ["My dog has been robbed by Cerberus？", "Oh my poor doggy!  I must save him in this weekend!", "So you carring on your umbrella and dog leash, down to the cellar.", "A adventure is beginging..."]
    function scroll(){
      const scroll1 = document.getElementById('scroll')
      if (i<4 && scroll1){
        console.log(i)
          scroll1.innerText = txtList[i] ? txtList[i] : ''
        i = i +1
      } else{
        console.log('start')
        if(scroll1){
          scroll1.innerText =""
        }
        end = true
        const play = document.getElementById('create')
        if (play){
          play.style.display = 'inline';
        }
        
      }

    }
    return (
            <div className="flex flex-col h-screen items-start overflow-x-hidden bg-custom-background">
                <header className="App-header">
                <div id="scroll" onClick={() => {scroll()}}>  What the hell? </div>
                 
                <div id="create" className="ml-20 " style={{display: 'none'}}>
                    <div className="text-white bg-custom-black py-1 px-2 text-2xl" >
                              <h3>Create your player, rescue your dog!</h3><br/>  
                              <FontAwesomeIcon
                                              icon={faDog}
                                              className="mt-80 ml-200 text-center"
                                              color="white"
                                              size="4x"
                                              onClick={() => {mintWalker()}}
                                          />
                                          <br/><br/>          
                 
                </div>
                </div>
                {/* <div>
                {web3Loading? <button className =" btn-inner - text "disabled> Loading ... </button>: <button className =" btn-inner - text "onClick = {connectWallet}>get accounts</button>}
                </div> */}
                </header> 
            </div>
    )
}

export default App