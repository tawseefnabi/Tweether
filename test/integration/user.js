const UserStorage = artifacts.require('UserStorage');

contract('users', () => {
  it('should be able to add a user', async () => {
    const userStorage = await UserStorage.deployed();
    const username = web3.utils.fromAscii('tawseef');
    const tx = await userStorage.createUser(username);
    // console.log(tx);
    assert.isOk(tx);
  });
})