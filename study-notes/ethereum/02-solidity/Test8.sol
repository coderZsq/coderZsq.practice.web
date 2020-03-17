pragma solidity ^0.6.1;
contract Purchase {
    address public seller;
    constructor() public {
        seller = msg.sender;
    }
    modifier onlySeller() {
        require(msg.sender == seller, "Only seller");
        _;
    }
    function f() public view onlySeller returns (uint256) {
        return 200;
    }
}
