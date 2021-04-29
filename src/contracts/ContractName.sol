// // SPDX-License-Identifier: MIT
// pragma solidity 0.6.12;
// 
// contract ContractName {
// 
// 	constructor() public {
// 
// 	}
// 
//   // Fallback: reverts if Ether is sent to this smart contract by mistake
//   fallback() external payable {
//   }
// }




// SPDX-License-Identifier: GPL-3.0

pragma experimental ABIEncoderV2;

pragma solidity >=0.4.0 <0.8.2;

contract drugValidation{

    struct msgData{
        string msg;
        address myAccountAddress;
        address friendAccountAddress;
        uint256 dateTime;
    }
    
    struct Users{
        string name;
        address myAccountAddress;
    }
    
    msgData[] listMsg;
    Users[] listOfUsers;
    
    function getListOfMessages() public view returns(msgData[] memory){
        return listMsg;    
    }
    
    function setMsg(string memory myMsg, address friendAccountAddress) public {
        msgData memory message = msgData(myMsg, msg.sender, friendAccountAddress, block.timestamp);
        listMsg.push(message);
    }
    
    function registerAccount(string memory Name, address accountAddress) public {
        Users memory user = Users(Name, accountAddress);
        listOfUsers.push(user);
    }
    
    function getAllUsers() public view returns(Users[] memory){
        return listOfUsers;
    } 

}



