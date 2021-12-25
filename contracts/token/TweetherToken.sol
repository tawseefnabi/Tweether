// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../helpers/Owned.sol";
contract TweettherToken is StandardToken, Owned  {
  string public name = "TweettherToken";
  string public symbol = "TWE";
  uint8 public decimals = 0;
  // ico for the token 
  uint256 public FOR_ICO = 750000;
  uint256 public FOR_FOUNDER = 250000;
  function TweettherToken() {
    totalSupply_ = FOR_ICO + FOR_FOUNDER;
    balances[msg.sender] = totalSupply_;
  }
  function fundICO(address _icoAddr) onlyOwner public {
    transfer(_icoAddr, FOR_ICO);
  }
}