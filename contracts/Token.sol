// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.5.0 <0.9.0;

contract token{

    string public name = "Test_Token";
    string public symbol = "HTT";
    uint public TotalSupply  = 1000000;

    address public owner;
    mapping (address=>uint)balances;

    constructor(){

        owner = msg.sender;
        balances[msg.sender] = TotalSupply;
    }

    function transfer(address to, uint amount ) external payable {
        require(balances[msg.sender] >= amount, "Not enought tokens");
        balances[msg.sender]  -= amount;
        balances[to] += amount;  
    }

    function balanceCheck(address account) external view returns(uint){

        return balances[account];
    }

}