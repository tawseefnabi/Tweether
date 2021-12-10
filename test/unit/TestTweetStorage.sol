// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import  "../../contracts/tweets/TweetStorage.sol";

contract TestTweetStorage {
    function testCreateTweet() public {
      TweetStorage _storage = TweetStorage(DeployedAddresses.TweetStorage());
      uint _userId = 1;
      uint _expectedTweetId = 1;

      Assert.equal(_storage.createTweet(_userId, "Hello World"), _expectedTweetId, "Should create tweet with ID 1");
    }
}