// import logo from './logo.svg';
import './App.css';
// import { Suspense, useEffect, useRef, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import { AppBar } from '../components'
// import Web3ReactManager from '../components/Web3ReactManager'
// import Routes from './routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFighterJet } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { createExportAssignment } from 'typescript';

// function App(): JSX.Element {
function App(){  
    const address = ""
    const walkerName = "testWalkerName"

    async function mintWalker() {
      // if (!chainId) return
      // const walker_json = require('../src/artifacts/contracts/Walker.sol/Walker.json')
      // console.log(walker_json)
      // const provider = hre.ethers.getDefaultProvider(config['network'])
      // console.log(provider)
    }
    const userState = null
    let end = false
    let i = 0
    const txtList = ["My dog has been robbed by Cerberus？", "Oh my poor doggy!  I must save him in this weekend!", "So you carring on your umbrella and dog leash, down to the cellar.", "A adventure is beginging..."]
    function scroll(){
      const scroll = document.getElementById('scroll')
      if (i<4){
        console.log(i)
        scroll.innerText = txtList[i] ? txtList[i] : ''
        i = i +1
      } else{
        console.log('start')
        scroll.innerText =""
        end = true
        const play = document.getElementById('create')
        play.style.display = 'inline';
      }

    }
    return (
      !userState ?
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
                </header> 
            </div>

          :
          <div></div>
           
    )
}

export default App