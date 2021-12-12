// import ContractManager, UserStorage, TweetStorage
const ContractManager = artifacts.require('ContractManager');
const UserStorage = artifacts.require('UserStorage');
const TweetStorage = artifacts.require('TweetStorage');
 // deploy_contracts
module.exports = function(deployer) {
  deployer.deploy(ContractManager)
  .then(() => {
    return ContractManager.deployed()
  })
  .then(manager => {
    // return promise.all of UserStorage and TweetStorage
    return Promise.all([
      manager.setAddress('UserStorage', UserStorage.address),
      manager.setAddress('TweetStorage', TweetStorage.address)
    ]);
  })
  // deployer.deploy(UserStorage);
  // deployer.deploy(TweetStorage);
}