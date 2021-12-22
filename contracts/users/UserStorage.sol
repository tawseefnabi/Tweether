// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../helpers/BaseStorage.sol";

contract UserStorage is BaseStorage {
  mapping(uint => Profile) public profiles;
  mapping(address => uint) public addresses;
  mapping(bytes32 => uint) public usernames;
  struct Profile {
    uint id;
    bytes32 username;
    bytes32 firstName;
    bytes32 lastName;
    string bio;
    string gravatarEmail;
  }
  // address ownerAddr;
  // address controllerAddr;
  uint latestUserId = 0;
  function createUser(address _address, 
    bytes32 _username,
    bytes32 _firstName,
    bytes32 _lastName,
    string memory _bio,
    string memory _gravatarEmail
    ) public onlyController returns  (uint) {
    // require(msg.sender == controllerAddr);
    latestUserId ++;
    profiles[latestUserId] = Profile(
      latestUserId, 
      _username,
      _firstName,
      _lastName,
      _bio,
      _gravatarEmail
      );
    addresses[_address] = latestUserId;
    usernames[_username] = latestUserId;
    return latestUserId;
  }
  // function setController(address _controllerAddr) public {
  //   require(msg.sender == ownerAddr);
  //   controllerAddr = _controllerAddr;
  // }

}