import Web3Utils from 'web3-utils';
import { eth,getInstance } from '../web3/provider'

 import TweetStorage from '../web3/artifacts/TweetStorage.json'
 import TweetController from '../web3/artifacts/TweetController.json'

  export const createTweet = async(text) =>{
    try {
      const controller = await getInstance(TweetController)
      await ethereum.enable()
      // get eth address
      const addresses = await eth.getAccounts()
      // "createTweet" wants both the user ID and the text as params for now:
      const result = await controller.createTweet(
        1,
        text,
      {
        from: addresses[0],
      })
      return result
    } catch (error) {
      
      console.log("error in creating tweet:",error)
      
    }
  }

  export const getTweetInfo = async(tweeId) =>{
    const storage = await getInstance(TweetStorage)
    const tweet = await storage.tweets.call(tweeId)
    const { id, content, userId, timestamp } = tweet
    return{
      id: parseInt(id),
      userId: parseInt(userId),
      content: content,
      timestamp: parseInt(timestamp),
    }
  }