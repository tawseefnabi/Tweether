// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import './TweetStorage.sol';

contract TweetController is BaseController {

  function createTweet(uint _userId, string memory _text) public returns(uint) {
    ContractManager _manager = ContractManager(managerAddr);

    address _tweetStorageAddr = _manager.getAddress("TweetStorage");
    TweetStorage _tweetStorage = TweetStorage(_tweetStorageAddr);

    return _tweetStorage.createTweet(_userId, _text);
  }

}