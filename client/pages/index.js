import React from 'react'
import { eth,getInstance } from "../web3/provider"
import { getUserInfo, createUser } from '../web3/users'
import { getTweetInfo, createTweet } from '../web3/tweets' 
import UserStorage  from '../web3/artifacts/UserStorage.json'
export default class IndexPage extends React.Component {
  logUser = async () => {
    const userInfo = await getUserInfo(1)
    console.log('userInfo', userInfo);
  }
  createUser1 = async () => {
    const tx = await createUser("tristan")
    console.log(tx)
  }
  logTweet = async () => {
    const tweetInfo = await getTweetInfo(1)
    console.log('tweetInfo', tweetInfo);
  }
  createTweet1 = async () => {
    const tx = await createTweet( "tweet1")
    console.log(tx)
  }
  async componentDidMount() {
    try {
      await ethereum.enable() // Prompt user to let our DApp access their addresses
      const addresses = await eth.getAccounts() // Get user's ETH addresses 
    //   // get eth balance  
    //   const balance = await eth.getBalance(addresses[0])
    //   const storage = await getInstance(UserStorage)
    // const { username } = await storage.profiles.call(1)
    } catch (err) {
      console.log("err",err)
      console.error("User denied access to their ETH addresses!")
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.logUser}>
          Get user with ID 1
        </button>
        <button onClick={this.createUser1}>
          Create User
        </button>
        <button onClick={this.logTweet}>
          Get tweet with ID 1
        </button>
        <button onClick={this.createTweet1}>
          Create Tweet
        </button>
      </div>    )
  }
}