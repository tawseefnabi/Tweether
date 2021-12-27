const receiver = "0x2920Ea1278c054B7DF14Df336cB52D9Dea904502";
const amount = web3.utils.toWei("10", 'ether');

module.exports = async function fundMetamask(callback) {
  try {
    const addresses = await web3.eth.getAccounts()
    const tx = await web3.eth.sendTransaction({
      from: addresses[2],
      to: receiver,
      value: amount
    });
    console.log(tx);
    callback(null, tx);
  } catch (err) {
    console.error("Err: in user storage", err);
    callback(err);
  }
}