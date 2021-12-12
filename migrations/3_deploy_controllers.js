const UserController = artifacts.require("./UserController.sol");
const TweetController = artifacts.require("./TweetController.sol");

const UserStorage = artifacts.require("./UserStorage.sol");
const TweetStorage = artifacts.require("./TweetStorage.sol");

 // deploy the contract
module.exports = (deployer) =>{
  deployer.then(async () => {
   await deployer.deploy(UserController);
   await deployer.deploy(TweetController);
  })
  // get the deployed instance of the contract:
  .then(async () => {
    return Promise.all([
      UserStorage.deployed(),
      TweetStorage.deployed()
    ]);
  })
  // set the controller address in both the storage contracts:
  .then((storageContracts) => {
    const [userStorage, tweetStorage] = storageContracts
    return Promise.all([
      userStorage.setControllerAddr(UserController.address),
      tweetStorage.setControllerAddr(TweetController.address)
    ]);
  })
};