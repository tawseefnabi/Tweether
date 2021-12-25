const TweetStorage = artifacts.require('TweetStorage');
const TweetController = artifacts.require('TweetController')
const utils = require('../utils');
const UserController = artifacts.require("UserController") 

const { assertVMException } =  utils;
contract ('tweets', () => {
  // Add this hook:
  before(async () => {
    const userCtrl = await UserController.deployed();
    
    const username = web3.utils.fromAscii("tristan")
    const firstName = web3.utils.fromAscii("Tristan")
    const lastName = web3.utils.fromAscii("Edwards")
    
    await userCtrl.createUser(
      username,
      firstName,
      lastName,
      "I like building stuff",
      "example@example.com"
    );
  });
  it("can't create tweets without controller", async() => {
    const tweetStorage = await TweetStorage.deployed();
    try {
      await tweetStorage.createTweet(1,'Hello World');
      assert.fail();
    } catch (error) {
      assertVMException(error);
      // assert.equal(error.message, 'VM Exception while processing transaction: revert');
    }
  })
  it("can create tweet with controller", async () => {
    const controller = await TweetController.deployed()

    const tx = await controller.createTweet( "Hello World")

    assert.isOk(tx)
  })
  it('can get tweet', async () => {
    const tweetStorage = await TweetStorage.deployed();
    const tweet = await tweetStorage.tweets.call(1);
    const {id, content, userId} = tweet;
    // Check if the different parts contain the expected values:
    assert.equal(parseInt(id), 1)
    assert.equal(content, "Hello World")
    assert.equal(parseInt(userId), 1)
  })
  it("can get all tweets IDs from user", async () => {
    const storage = await TweetStorage.deployed()

    const userId = 1
    const ids = await storage.getTweetIdsFromUser.call(userId)

    const expectedTweetId = 1

    assert.isOk(Array.isArray(ids))
    assert.equal(ids[0], expectedTweetId)
  })
})
