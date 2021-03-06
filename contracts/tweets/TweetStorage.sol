// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../helpers/BaseStorage.sol";

contract TweetStorage is BaseStorage {
    struct Tweet {
        uint id;
        string content;
        uint userId;
        uint timestamp;
    }
    mapping(uint => Tweet) public tweets;
    mapping (uint => uint[]) userTweetIds;
     // commenting getTweet function, as public in  tweets does same
    // function getTweet(uint id) public view returns (string) {
    //     return tweets[id].content;
    // }
    uint latestTweetId = 0;
    function createTweet(uint _userId, string memory _text) public onlyController returns (uint) {
      latestTweetId++;
      tweets[latestTweetId] = Tweet(latestTweetId, _text, _userId, block.timestamp);
      userTweetIds[_userId].push(latestTweetId); 
      return latestTweetId;
    }
    function getTweetIdsFromUser(uint _userId) view public returns( uint[] memory ) {
    return userTweetIds[_userId];
  }
}