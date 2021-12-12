pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
    // Get the deployed contract
    UserStorage userStorage ;
    constructor() public {
      userStorage = new UserStorage();
      userStorage.setControllerAddr(address(this));
    }
    
    function testCreateFirstUser() public {
      uint _expectedId = 1;
      Assert.equal(userStorage.createUser('tawseef'), _expectedId, "Should create user with ID 1");
    }
}