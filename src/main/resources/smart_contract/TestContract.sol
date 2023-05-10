pragma solidity ^0.8.17;

import "./InterFaceTest.sol";

abstract contract TestContract is InterFaceTest {
    uint private storedData;
    address private walletAddress;
    struct NameContainer{
        string name;
        uint age;
        address walletAddress;
    }

    constructor() {
        walletAddress = 0x024F7A6e2E5087E3A5e84C5072c37b2B687d65d8; // this wallet contains ganache eth ==> 100
    }

    function setStoredData(uint storedData) public pure {
        storedData = storedData;
    }

    function getStoredData() public view returns (uint){
        NameContainer memory container = NameContainer("masud",34,walletAddress);
        return storedData;
    }
}