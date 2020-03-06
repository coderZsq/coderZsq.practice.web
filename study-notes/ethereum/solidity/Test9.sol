pragma solidity ^0.6.1;
contract Sink {
    fallback() external payable {}
}
contract Test {
  fallback() external {
    x = 1;
  }
  uint x;
}
contract Celler {
  function callTest(Test test) public returns (bool) {
    (bool success,) = address(test).call(abi.encodeWithSignature("nonExistingFunction()"));
    require(success);
    address payable testPayable = address(uint160(address(test)));
    return testPayable.send(2 ether);
  }
}
