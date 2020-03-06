pragma solidity ^0.6.1;

contract Storage {
    uint256 myData;
    function setData(uint256 newData) public {
        myData = newData;
    }
    function getData() public view returns (uint256) {
        return myData;
    }
    function pureAnd(uint256 a, uint256 b)
        public
        pure
        returns (uint256 sum, uint256 _a)
    {
        return (a + b, a);
    }
}
