import Web3Utils from 'web3-utils';
import { eth,getInstance } from '../web3/provider' 
import UserStorage  from '../web3/artifacts/UserStorage.json'
import UserController from "../web3/artifacts/UserController.json"


export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage)
  const {id, username} = await storage.profiles.call(userId)

  return {
    id:parseInt(id),
    username: Web3Utils.toAscii(username).replace(/\u0000/g, '')
  }  
}

// create user function
export const createUser = async (username) => {
    const controller = await getInstance(UserController)
    try {
      // check etheruem is enabled
      await ethereum.enable()
      // get eth address
      const address = await eth.getAccounts()
      // create user from user controller
      const user = await controller.createUser(
        Web3Utils.fromAscii(username),
        {from :address[0]}
        )
      return user
    } catch (error) {
      console.log("error in create user:",error)
    }
}