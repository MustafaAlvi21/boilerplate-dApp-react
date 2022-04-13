import React, { useEffect, useState } from "react";
import { Form, Button, label, Container } from "react-bootstrap";
import "./App.css";

import Web3 from 'web3';

import logo from "../../src/logo.png"

function Contract_Interaction(props) {
    const contractAddress1 = "0x8b3dC8D4Edd8944bB8EF11913af9C3b55140805D";
    const ABI = [{ "inputs": [{ "internalType": "contract IHorse", "name": "nftContract", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokenID", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "tokenOwner", "type": "address" }], "name": "airdropClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokenID", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "claimer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "claimedDailyReward", "type": "event" }, { "inputs": [], "name": "_Owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "_burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "_fundAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_previousOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "excludedA", "type": "address" }], "name": "addExcludedAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "addSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "airdropEndDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "tokenIDs", "type": "uint256[]" }], "name": "bulkClaimAirdrop", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "tokenIDs", "type": "uint256[]" }], "name": "bulkClaimRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "endDate", "type": "uint256" }], "name": "changeAirdropEndDate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "Taddress", "type": "address" }], "name": "changeFundAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_maxtx", "type": "uint256" }], "name": "changeMaxtx", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "changeRewardAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_sellLimit", "type": "uint256" }], "name": "changeSellLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenID", "type": "uint256" }], "name": "checkDailyReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenID", "type": "uint256" }], "name": "claimAirdrop", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenID", "type": "uint256" }], "name": "claimDailyReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "dailyReward", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "feeExcludedAddress", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "geUnlockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "horseContract", "outputs": [{ "internalType": "contract IHorse", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "isAirdroped", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liquidityPair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "receivers", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "name": "multiTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "excludedA", "type": "address" }], "name": "removeExcludedAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sellLimit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sellLimiter", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "liquidityPairAddress", "type": "address" }], "name": "setLiquidityPairAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Tfee", "type": "uint256" }], "name": "setTeamFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stopReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "teamFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "toggleSellLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

    const [myChain, setChain] = useState([]);
    const [contractAddress, setContractAddress] = useState("");
    const [abi, setabi] = useState("");

    const [loading, setLoading] = useState(true)
    const [showCode, setShowCode] = useState("block");
    const [showRead, setShowRead] = useState("block");
    const [showWrite, setShowWrite] = useState("none");
    const [showResult, setShowResult] = useState({});

    const [kuchBhi, setKuchBhi] = useState([]);
    const [aaa, setaaa] = useState();

    // WEB3 DAPP PART 
    const [myAddress, setMyAddress] = useState("Connect to Wallet");
    const [contractWeb3, setContractWeb3] = useState([]);
    const [dAppReady, set_dAppReady] = useState(false);


    async function onHandleShow(e) {
        if (e.target.id === "read") {
            setShowCode("none");
            setShowRead("flex");
            setShowWrite("none");
        }
        if (e.target.id === "write") {
            setShowCode("none");
            setShowRead("none");
            setShowWrite("block");
        }
    }

    async function LoadDefaultWeb3() {
        try {
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
    
            if(contractAddress.length == 42 && abi.length > 0){
                const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                
                await window.web3.eth.getCode(contractAddress)
                  .then( async(result) => {
                    if(result !== "0x") {
                        localStorage.setItem("contractAddressStored", contractAddress)
                        localStorage.setItem("AbiStored", JSON.stringify(abi))
                    
                        setContractAddress(contractAddress1)
                        setabi(ABI)

                        const contractData = await new window.web3.eth.Contract(ABI, contractAddress1);
                        setContractWeb3(contractData)

                        setLoading(false);
                    } else {
                        alert("Invalid contract address or select correct network");
                    }
                    
                  }).catch(err => alert(err))
            } else {
                alert("Fill all fields with valid data.")
            }
            
        } catch (error) {
            console.log(error);            
        }



        // setLoading(false);   // settting false here because getData() and LoadDefaultWeb3() both fetching completes now.
    }


    async function loadWeb3() {
        if (window.ethereum) {
            const web33 = new Web3(window.ethereum)

            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            console.log(chainId);
            if (chainId !== "0x1") {
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x1' }],
                    });
                } catch (switchError) {
                    if (switchError.code === 4902) {
                        try {
                            await window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [{ chainId: '0x1', rpcUrl: 'https://mainnet.infura.io/v3/' }],
                            });
                        } catch (addError) {
                        }
                    }
                    // handle other "switch" errors
                }
                window.ethereum.on('chainChanged', handleChainChanged);
                function handleChainChanged(_chainId) {
                    window.location.reload();
                }
            }

            const contractData = await new web33.eth.Contract(abi, contractAddress1);
            await window.ethereum.enable()
                .then((result) => {
                    var str = result[0];
                    console.log(str);
                    setMyAddress(str)

                }).catch((err) => {
                    console.log(err);
                });

            setContractWeb3(contractData);
            set_dAppReady(true);
        } else {
            alert("Please install Metamask");
        }

    }
    

    async function getFromWeb3(name, inputs, e) {
        e.preventDefault();

        let formInputs = e.target.length - 1;
        let tempArray = [];

        for (let i = 0; i < formInputs; i++) {
            console.log(e.target[i].type);
            console.log(e.target[i].value);

            if (e.target[i].type === "tel" && e.target[i].value.substring(0, 2) === "0x" && await window.web3.utils.isAddress(e.target[i].value) === true) {
                tempArray.push(e.target[i].value)

            } else if (e.target[i].type === "text" || e.target[i].type === "number") tempArray.push(e.target[i].value);

            else {
                return alert("Invalid address entered.");
            }

        }

        console.log(tempArray);

        try {
            contractWeb3.methods[name](...tempArray)
                .call()
                .then(response => {
                    console.log(response);
                    setShowResult({ name: name, result: response.toString() });
                })
                .catch(err => {
                    // console.log("err");
                    // console.log(err);
                    // console.log("err?.message");
                    // console.log(err?.message);
                    setShowResult({ name: name, result: err.toString() });
                })


        } catch (error) {
            console.log("error");
            console.log(error);
            setShowResult({ name: name, result: error.toString() });
        }
    }


    async function sendFromWeb3(name, inputs, e) {
        e.preventDefault();
        if (dAppReady) {
            let formInputs = e.target.length - 1;
            let tempArray = [];

            for (let i = 0; i < formInputs; i++) {
                console.log(e.target[i].type);
                console.log(e.target[i].value);
                console.log(typeof e.target[i].value);

                if (e.target[i].name === "price") { }          // is liay body empty hay takay array main push na ho price...
                else if (e.target[i].type === "tel") tempArray.push(e.target[i].value)
                else if (e.target[i].type === "text" || e.target[i].type === "number") tempArray.push(e.target[i].value);
                else return alert("Invalid address entered.");

            }
            console.log(tempArray);

            const send_Data = e.target.name === "payable" ? { from: myAddress, value: kuchBhi.price * 1000000000000000000 } : { from: myAddress }
            console.log(send_Data);
            try {
                contractWeb3.methods[name](...tempArray)
                    .send(send_Data)
                    .then(response => {
                        alert("Transaction successful");
                    })
                    .catch(err => {
                        if (err.code === 4001) {
                            setShowResult({ name: name, result: "User denied transaction signature." });

                        } else setShowResult({ name: name, result: err.toString() });
                    })

            } catch (error) {
                if (error.toString() === "TypeError: param.map is not a function") {
                    console.log("--------------------------------------");

                    let tempArray2 = [];
                    tempArray.forEach(element => {
                        try {
                            tempArray2.push(JSON.parse(element));

                        } catch (error) {
                            return setShowResult({ name: name, result: error.toString() });
                        }
                    });

                    try {
                        contractWeb3.methods[name](...tempArray2)
                            .send(send_Data)
                            .then(response => {
                                alert("Transaction successful");
                            })
                            .catch(err => {
                                if (err.code === 4001) {
                                    setShowResult({ name: name, result: "User denied transaction signature." });

                                } else setShowResult({ name: name, result: err.toString() });
                            })
                    }
                    catch (error) {
                        setShowResult({ name: name, result: error.toString() });
                    }


                } else {
                    setShowResult({ name: name, result: error.toString() });

                }

            }
        } else {
            alert("Connect your wallet");
        }
    }

    useEffect(() => {
        const a1 = localStorage.getItem("AbiStored")
        const c1 = localStorage.getItem("contractAddressStored")
        a1 !== null && setabi(a1)
        c1 !== null && setContractAddress(c1)
    }, [])

    useEffect(() => {
        if (abi.length !== 0) {
            // LoadDefaultWeb3()
        }
    }, [abi])

    async function inputHandle(e) {
        console.log(e.target.type);
        setKuchBhi({ ...kuchBhi, [e.target.name]: e.target.value });
        setaaa(e.target.value)
    }




    const render = () => {
        if (loading) return (
            <div className="container1">
                <div className="form-box">
                    <div className="header-form">
                        <h4 className="text-primary text-center"> 
                            <img src={logo} alt="logo" width={200} /> 
                        </h4>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder="Contract Address" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <input type="text" value={abi} className="form-control" onChange={(e) => setabi(e.target.value)} placeholder="ABI" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <select className="form-control" value={myChain} onChange={(e) => setChain(e.target.value)}>
                                    <option value={["Ethereum",        "0x1"]}> Ethereum</option>          
                                    <option value={["Testnet Rinkeby", "0x4"]}> Rinkeby Testnet</option>   
                                    <option value={["Testnet Ropsten", "0x3"]}> Ropsten Testnet</option>   
                                    {/* <option value={["Binance",         "0x1"]}> Binance</option>           
                                    <option value={["Testnet Binance", "0x1"]}> Binance Testnet</option>   
                                    <option value={["Polygon",         "0x1"]}> Polygon</option>           
                                    <option value={["Testnet Mumbai",  "0x1"]}> Mumbai Testnet</option>     */}
                                </select>
                            </div>
                            <button type="button" onClick={() => LoadDefaultWeb3()} className="btn btn-dark btn-block" style={{fontWeight: 600 }}>Create My dApp</button>
                        </form>
                    </div>
                </div>
            </div>
        )

        return (
            <Container>
                <div className="p-2 contractSection " style={{ display: props.display }}>
                    <div className="row mx-0">
                        <Button variant="light" id="read" onClick={(e) => onHandleShow(e)} className="mr-3"> Read </Button>
                        <Button variant="light" id="write" onClick={(e) => onHandleShow(e)}> Write </Button>
                    </div>
                    <div style={{ display: "block" }} >
                        <div>
                            <div className="row byteCodeDiv cursor">
                                <Form.Control as="textarea" value={contractAddress1} style={{ height: '100px' }} />
                            </div>
                            <div className="row byteCodeDiv cursor">
                                <Form.Control as="textarea" placeholder="Contract Source Code" value={JSON.stringify(abi)} style={{ height: '100px' }} />
                            </div>

                        </div>
                    </div>
                    <div className="row" style={{ display: showRead }} >
                        <div className="col-12">
                            <br />
                            {
                                abi?.map((obj, i) => {
                                    if (obj.type === "function" && (obj.stateMutability === "view" || obj.stateMutability === "pure")) {
                                        return (
                                            <>
                                                <div className="row my-3" key={i} style={{ border: "1px solid white", paddingBottom: "10px" }}>
                                                    <div className="col-12 rowHead" style={{ backgroundColor: "darkgrey" }}>
                                                        <p className="text-black my-2"> {obj.name} </p>
                                                    </div>
                                                    <Form onSubmit={(e) => getFromWeb3(obj.name, [], e)}>
                                                        <div className="col-12">
                                                            <Form.Group className="mb-3">
                                                                {
                                                                    obj?.inputs?.map((value, i) => {
                                                                        return (
                                                                            <>
                                                                                <div className="row mt-3">
                                                                                    {/* <label className="col-12 gold-color" htmlFor="">{value.name}</label> */}
                                                                                    <Form.Label className="col-12 gold-color">{value.name}</Form.Label>
                                                                                    <div className="col-12">
                                                                                        {

                                                                                            value.type.includes("uint256") === true &&
                                                                                            <Form.Control required type="number" name={obj.name} key={i} value={kuchBhi?.obj?.name} onChange={(e) => inputHandle(e)} placeholder={value.type} />
                                                                                        }
                                                                                        {
                                                                                            (value.type.includes("string") === true || value.type.includes("bytes") === true) &&
                                                                                            <Form.Control required type="text" name={obj.name} key={i} value={kuchBhi?.obj?.name} onChange={(e) => inputHandle(e)} placeholder={value.type} />
                                                                                        }
                                                                                        {
                                                                                            value.type.includes("address") === true &&
                                                                                            <Form.Control required type="tel" name={obj.name} key={i} value={kuchBhi?.obj?.name} onChange={(e) => inputHandle(e)} placeholder={value.type} />
                                                                                        }
                                                                                    </div>

                                                                                </div>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </Form.Group>
                                                        </div>
                                                        <div className="col-12 my-2">
                                                            <Button variant="primary" name={obj.name} type="submit"> Read </Button>
                                                        </div>

                                                    </Form>
                                                    {
                                                        obj.name === showResult.name && <>
                                                            <div className="col-12">
                                                                <p className="gold-color my-2"> {showResult.result} </p>
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div style={{ display: showWrite }} >
                        <div className="col">
                            <br />
                            <div>
                                <Button onClick={() => loadWeb3()}>{myAddress.length > 20 ? myAddress.substring(0, 12) + "..." : myAddress}</Button>
                            </div>
                            <br />
                            {
                                abi?.map((obj, j) => {
                                    if (obj.type === "function" && obj.stateMutability === "nonpayable") {
                                        return (
                                            <>
                                                <div className="row" style={{ border: "1px solid white", paddingBottom: "10px" }}>
                                                    <div className="col-12 rowHead" style={{ backgroundColor: "darkgrey" }}>
                                                        <p className="text-black my-2"> {obj.name} </p>
                                                    </div>

                                                    <Form name="nonpayable" onSubmit={(e) => sendFromWeb3(obj.name, [], e)}>
                                                        <div className="col-12">
                                                            <Form.Group className="mb-3">
                                                                {
                                                                    obj?.inputs?.map((value, i) => {
                                                                        return (
                                                                            <>
                                                                                <div className="row mt-3">
                                                                                    <Form.Label className="col-12 gold-color">{value.name}</Form.Label>
                                                                                    <div className="col-12">
                                                                                        {
                                                                                            value.type.includes("uint256") === true &&
                                                                                            <Form.Control required type="text" name={obj.name} key={i} value={kuchBhi?.obj?.name} onChange={(e) => inputHandle(e)} placeholder={value.type} />
                                                                                        }
                                                                                        {
                                                                                            (value.type.includes("string") === true || value.type.includes("bytes") === true) &&
                                                                                            <Form.Control required type="text" name={obj.name} key={i} value={kuchBhi?.obj?.name} onChange={(e) => inputHandle(e)} placeholder={value.type} />
                                                                                        }
                                                                                        {
                                                                                            value.type.includes("address") === true &&
                                                                                            <Form.Control required type="tel" name={obj.name} key={i} value={kuchBhi?.obj?.name} onChange={(e) => inputHandle(e)} placeholder={value.type} />
                                                                                        }
                                                                                    </div>

                                                                                </div>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </Form.Group>
                                                        </div>
                                                        <div className="col-12 my-2">
                                                            <Button variant="primary" name={obj.name} type="submit"> Send Transaction </Button>
                                                        </div>

                                                    </Form>
                                                    {
                                                        obj.name === showResult.name && <>
                                                            <div className="col-12">
                                                                <p className="gold-color my-2"> {showResult.result} </p>
                                                            </div>
                                                        </>
                                                    }

                                                </div>

                                                <br />
                                            </>
                                        )
                                    }


                                })
                            }
                            {
                                abi?.map((obj, j) => {
                                    if (obj.type === "function" && obj.stateMutability === "payable") {
                                        return (
                                            <>
                                                <div className="row" style={{ border: "1px solid white", paddingBottom: "10px" }}>
                                                    <div className="col-12" style={{ backgroundColor: "darkgrey" }}>
                                                        <p className="text-black my-2"> {obj.name} </p>
                                                    </div>

                                                    <Form name="payable" onSubmit={(e) => sendFromWeb3(obj.name, [], e)}>
                                                        <div className="col-12">
                                                            <Form.Group className="mb-3">
                                                                {
                                                                    obj?.inputs?.map((value, i) => {
                                                                        return (
                                                                            <>
                                                                                <div className="row mt-3">
                                                                                    <Form.Label className="col-12 gold-color">{value.name}</Form.Label>
                                                                                    <div className="col-12">
                                                                                        {
                                                                                            value.type.includes("uint256") === true &&
                                                                                            <Form.Control required type="text" name={obj.name} key={i} value={kuchBhi?.obj?.name} onChange={(e) => inputHandle(e)} placeholder={value.type} />
                                                                                        }
                                                                                        {
                                                                                            (value.type.includes("string") === true || value.type.includes("bytes") === true) &&
                                                                                            <Form.Control required type="text" name={obj.name} key={i} value={kuchBhi?.obj?.name} onChange={(e) => inputHandle(e)} placeholder={value.type} />
                                                                                        }
                                                                                        {
                                                                                            value.type.includes("address") === true &&
                                                                                            <Form.Control required type="tel" name={obj.name} key={i} value={kuchBhi?.obj?.name} onChange={(e) => inputHandle(e)} placeholder={value.type} />
                                                                                        }
                                                                                    </div>

                                                                                </div>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                                <div className="row mt-3">
                                                                    <Form.Label className="col-12 gold-color">Ether Value</Form.Label>
                                                                    <div className="col-12">
                                                                        <Form.Control required type="number" name="price" value={kuchBhi?.price} onChange={(e) => inputHandle(e)} placeholder="payableAmount (TRM)" />
                                                                    </div>
                                                                </div>
                                                            </Form.Group>
                                                        </div>
                                                        <div className="col-12 my-2">
                                                            <Button variant="primary" name={obj.name} type="submit"> Send Transaction </Button>
                                                        </div>

                                                    </Form>
                                                    {
                                                        obj.name === showResult.name && <>
                                                            <div className="col-12">
                                                                <p className="gold-color my-2"> {showResult.result} </p>
                                                            </div>
                                                        </>
                                                    }

                                                </div>

                                                <br />
                                            </>
                                        )
                                    }


                                })
                            }
                        </div>
                    </div>
                </div>

            </Container>
        )

    }

    return render()

}
export default Contract_Interaction;