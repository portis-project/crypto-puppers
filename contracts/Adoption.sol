pragma solidity ^0.5.0;

import "tabookey-gasless/contracts/GsnUtils.sol";
import "tabookey-gasless/contracts/IRelayHub.sol";
import "tabookey-gasless/contracts/RelayRecipient.sol";

contract Adoption is RelayRecipient {
    constructor(IRelayHub rhub) public {
        // this is the only hub I trust to receive calls from
        setRelayHub(rhub);
    }

    // array of adopter ethereum wallet addresses
    // 4 is the number of available pet
    address[4] public adopters;

    event adopted(address owner, uint petId);
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    // adopt one of pet
    function adopt(uint petId) public returns (uint) {
        // validation of pet id
        require(petId >= 0 && petId <= 15, "Illegal pet id");

        // getSender() = adopter ethereum wallet address
        adopters[petId] = getSender();

        emit adopted(getSender(), petId);
        emit Transfer(getSender(), address(this), 1);

        // return same pet id as success confirmation
        return petId;
    }

    function getAdopters() public returns (address[4] memory) {
        return adopters;
    }

    function acceptRelayedCall(address relay, address from, bytes calldata encodedFunction, uint256 transactionFee, uint256 gasPrice, uint256 gasLimit, uint256 nonce, bytes calldata approvalData, uint256 maxPossibleCharge) external view returns (uint256, bytes memory) {
        return (0, "");
    }

    function preRelayedCall(bytes calldata context) /*relayHubOnly*/ external returns (bytes32) {
        return bytes32(uint(123456));
    }

    function postRelayedCall(bytes calldata context, bool success, uint actualCharge, bytes32 preRetVal) /*relayHubOnly*/ external {
    }
}
