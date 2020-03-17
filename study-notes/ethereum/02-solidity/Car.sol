pragma solidity ^0.6.1;

contract Car {
    string brand;
    uint256 public price;
    enum Weekday { Monday, Tuesday, Wednesday }
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
    function test() public pure returns(uint16) {
        // bytes17 a;
        // return a.length;
        Weekday wd = Weekday.Wednesday;
        return uint16(wd);
    }
    function fun(uint len) public pure returns(uint[] memory, bytes memory) {
        uint[] memory a = new uint[](10);
        bytes memory b = new bytes(len);
        return (a, b);
    }
}
contract CarPayable {
    string a;
    Car car = new Car("BMW", 10000);
    fallback() external {
        address(this).balance;
    }
}
