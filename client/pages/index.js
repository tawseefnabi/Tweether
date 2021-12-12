import React from 'react'
import { eth } from "../web3/provider"
import { getUserInfo } from '../web3/users' 
import UserStorage  from '../web3/artifacts/UserStorage.json'
export default class IndexPage extends React.Component {
  logUser = async () => {
    const userInfo = await getUserInfo(1)
    console.log("userInfo",userInfo)
  }
  async componentDidMount() {
    try {
      await ethereum.enable() // Prompt user to let our DApp access their addresses
      const addresses = await eth.getAccounts() // Get user's ETH addresses
      console.log("addd",addresses)
      // get eth balance  
      const balance = await eth.getBalance(addresses[0])
      console.log("balance: ", balance) 
      
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
      </div>    )
  }
}