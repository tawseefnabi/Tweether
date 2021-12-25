const TweetherToken = artifacts.require("TweetherToken");

module.exports = function(deployer) { 
  deployer.deploy(TweetherToken);
}