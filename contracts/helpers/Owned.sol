// SPDX-License
pragma solidity >=0.4.22 <0.9.0;

contract Owned {
  address public ownerAddr;

  constructor () public {
    ownerAddr = msg.sender;
  }
  // custom modifier onlyOwner can be used to restrict calls to only the owner
  modifier onlyOwner {
    require(msg.sender == ownerAddr);
    _;
  }
  // function to transfer ownership
  function transferOwnership(address _newOwner) public onlyOwner{
    // only currenr owner can set new ownerAddr
    // require(msg.sender == ownerAddr);
    // the new ownerAddr must be a valid address && cannot be the zero address
    require(_newOwner != address(0));
    ownerAddr = _newOwner;
  }
}