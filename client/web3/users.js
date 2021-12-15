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
export const createUser = async (...params) => {
    const controller = await getInstance(UserController)
    try {
      // check etheruem is enabled
      await ethereum.enable()
      // get eth address
      const address = await eth.getAccounts()
      // create user from user controller
      const firstName = Web3Utils.asciiToHex(params[0])
      const lastName = Web3Utils.asciiToHex(params[1])
      const username = Web3Utils.asciiToHex(params[2])
      const bio = params[3]
      const gravatarEmail = params[4]
      
        
      const user = await controller.createUser(
        firstName,
        lastName,
        username,
        bio,
        gravatarEmail,
        {from :address[0]}
        )
      return user
    } catch (error) {
      console.log("error in create user:",error)
    }
}