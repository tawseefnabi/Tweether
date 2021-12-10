const TweetStorage = artifacts.require('TweetStorage');

contract ('tweets', () => {
  before(async() => {
    const tweetStorage = await TweetStorage.deployed();
    await tweetStorage.createTweet(1,'Hello World');
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
