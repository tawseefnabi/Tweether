import { eth,getInstance } from '../web3/provider' 
import UserStorage  from '../web3/artifacts/UserStorage.json'

export const getUserInfo = async (userId) => {
    const userStorage = await getInstance(UserStorage)
    const profile = await userStorage.profiles.call(userId)
    return profile
}