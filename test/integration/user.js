const UserStorage = artifacts.require('UserStorage');

contract('users', () => {
  it('should be able to add a user', async () => {
    const userStorage = await UserStorage.deployed();
    const username = web3.utils.fromAscii('tawseef');
    const tx = await userStorage.createUser(username);
    // console.log(tx);
    assert.isOk(tx);
  });
  it('can get user', async () => {
    const userStorage = await UserStorage.deployed();
    const userId = 1;
    const userInfo = await userStorage.profiles.call(userId);
    const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, '')
    assert.equal(username, "tawseef")
  })
})