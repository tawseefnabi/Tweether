// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../helpers/BaseStorage.sol";

contract UserStorage is BaseStorage {
  mapping(uint => Profile) public profiles;
  struct Profile {
    uint id;
    bytes32 username;
  }
  // address ownerAddr;
  // address controllerAddr;
  uint latestUserId = 0;
  function createUser(bytes32 _username) public onlyController returns  (uint) {
    // require(msg.sender == controllerAddr);
    latestUserId ++;
    profiles[latestUserId] = Profile(latestUserId, _username);
    return latestUserId;
  }
  // function setController(address _controllerAddr) public {
  //   require(msg.sender == ownerAddr);
  //   controllerAddr = _controllerAddr;
  // }

}