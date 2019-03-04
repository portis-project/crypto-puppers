pragma solidity ^0.4.24;

import "tabookey-gasless/contracts/RelayRecipient.sol";

contract Adoption is RelayRecipient {
    constructor(address hub) public {
        // this is the only hub I trust to receive calls from
        init_relay_hub(RelayHub(hub));
    }

    // array of adopter ethereum wallet addresses
    // 4 is the number of available pet
    address[4] public adopters;

    event adopted(address owner, uint petId);

    // adopt one of pet
    function adopt(uint petId) public returns (uint) {
        // validation of pet id
        require(petId >= 0 && petId <= 3, "Illegal pet id");

        // get_sender() = adopter ethereum wallet address
        adopters[petId] = get_sender();

        emit adopted(get_sender(), petId);

        // return same pet id as success confirmation
        return petId;
    }

    function getAdopters() public returns (address[4]) {
        return adopters;
    }

    function accept_relayed_call(address relay, address from, bytes memory encoded_function, uint gas_price, uint transaction_fee) public view returns(uint32) {
        return 0;
    }

    function post_relayed_call(address relay, address from, bytes memory encoded_function, bool success, uint used_gas, uint transaction_fee) public {
    }
}
