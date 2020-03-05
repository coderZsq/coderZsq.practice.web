pragma solidity ^0.6.1;

contract Car {
    string brand;
    uint256 public price;
    constructor(string memory initBrand, uint256 initPrice) public {
        brand = initBrand;
        price = initPrice;
    }
    function setBrand(string memory newBrand) public {
        brand = newBrand;
    }
    function getBrand() public view returns (string memory) {
        return brand;
    }
    function setPrice(uint256 newPrice) public {
        price = newPrice;
    }
}
