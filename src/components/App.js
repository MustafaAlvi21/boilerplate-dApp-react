import React, { useState, useEffect } from 'react';
import logo from '../logo.png';
import './App.css';
import importedContract from '../abis/drugValidation.json'
import Web3 from 'web3';


function App() {
  const [ myAccount, setMyAccount ] = useState("");
  const [ myContract, setMyContract ] = useState("");
    useEffect(() => {
      loadWeb3()
      loadBlockchainData()
    }, [])


  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }


  async function loadBlockchainData() {
    const web3 = window.web3
    
    // Load account
    const accounts = await web3.eth.getAccounts()
    setMyAccount(accounts[0])
    console.log("myAccount => " + myAccount)
    
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = importedContract.networks[networkId]
    if(networkData) {
      // Assign contract
      const contractData = new web3.eth.Contract(importedContract.abi, networkData.address)
      setMyContract(contractData)
      
      const result = await contractData.methods.getAllUsers().call()
      // const result = await contractData.methods.registerAccount("Mustafa", "0xA921A30BFED52e864D24B6277ef84E23798a4cC8").send( {from: accounts[0], gas:3000000} )

      console.log(result);

      
    } else {
      window.alert('DStorage contract not deployed to detected network.')
    }
  }

  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://github.com/MustafaAlvi21/boilerplate-dApp-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">
              <a
                href="https://github.com/MustafaAlvi21/boilerplate-dApp-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} className="App-logo" alt="logo" width="200"/>
              </a>
              <h1>Boilerplate</h1>
              <h5>React + Truffle.js for Ethereum dApp</h5>
              <p>
                Edit <code>src/components/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://github.com/MustafaAlvi21/boilerplate-dApp-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                CLONE IT <u><b>NOW! </b></u>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );

}

export default App;