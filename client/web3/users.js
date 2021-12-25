import Web3Utils from 'web3-utils';
import { eth,getInstance } from '../web3/provider' 
import UserStorage  from '../web3/artifacts/UserStorage.json'
import UserController from "../web3/artifacts/UserController.json"


// export const getUserInfo = async (userId) => {
//   const storage = await getInstance(UserStorage)
//   const {id, username} = await storage.profiles.call(userId)

//   return {
//     id:parseInt(id),
//     username: Web3Utils.toAscii(username).replace(/\u0000/g, '')
//   }  
// }
export const getLoggedInUserId = async () => {
  try {
    await ethereum.enable()
    const addresses = await eth.getAccounts()

    if (!addresses) return

    const storage = await getInstance(UserStorage)
    const userId = await storage.addresses.call(addresses[0])

    return parseInt(userId)
  } catch (err) {
    console.error("Err: in user storage", err)
  }
}
export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage)
  const profile = await storage.profiles.call(userId)

  const {
    id, 
    username, 
    firstName, 
    lastName, 
    bio, 
    gravatarEmail, 
  } = profile
  
  if (!parseInt(id)) throw "Couldn't find user!"

  return {
    id: parseInt(id),
    username: eth.utils.toAscii(username),
    firstName: eth.utils.toAscii(firstName),
    lastName: eth.utils.toAscii(lastName),
    bio,
    gravatarEmail,
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