const TweetStorage = artifacts.require('TweetStorage');
const TweetController = artifacts.require('TweetController')
const utils = require('../utils');

const { assertVMException } =  utils;
contract ('tweets', () => {
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

    const tx = await controller.createTweet(1, "Hello World")

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
})
