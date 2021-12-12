const UserStorage = artifacts.require('UserStorage');
const utils = require('../utils');
const { assertVMException } =  utils;

contract('users', () => {
  it("can't create user without controller", async() => {
    const userStorage = await UserStorage.deployed();
    try {
      const username = web3.utils.fromAscii('tawseef');
      await userStorage.createUser(username);
      assert.fail();
    } catch (err) {
      // console.log('error', err);
      assertVMException(err); // <-- Call it here
    }
  })
  it("can create user with controller", async() => {
    const userStorage = await UserStorage.deployed();
    try {
      const username = web3.utils.fromAscii('tawseef');
      const tx =await userStorage.createUser(username);
      assert.isOk(tx);
    } catch (err) {
      // console.log('error', err);
      assertVMException(err); // <-- Call it here
    }
  })
  // it('should be able to add a user', async () => {
  //   const userStorage = await UserStorage.deployed();
  //   const username = web3.utils.fromAscii('tawseef');
  //   const tx = await userStorage.createUser(username);
  //   assert.isOk(tx);
  // });
  it('can get user', async () => {
    const userStorage = await UserStorage.deployed();
    const userId = 1;
    const userInfo = await userStorage.profiles.call(userId);
    console.log('userInfo--->',userInfo[1]);
    const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, '')
    console.log('username', username);
    assert.equal(username, "tawseef")
  })
})