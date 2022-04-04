# Tweether
## System requriements
 
Install  blockchain simulator client [Ganache-CLI](https://github.com/trufflesuite/ganache) like localhost running on default port `8545`
```sh
  npm install -g ganache-cli
  ```

  Once it's installed, you can check if it works by simply running the global ganache-cli command in a new terminal window:

```sh
  ganache-cli
 ```
 You are now running a local Ethereum node with some (fake) wallets that you can send money from.
 
 ```sh 
  mkdir Tweether
  cd Tweether
  npm init
```

 ### Compiling our Solidity program

  - Node-based Solidity compiler called [solc](https://www.npmjs.com/package/solc).

  ```sh
  npm install solc --save
  ```
  - [Web3.js](https://github.com/ChainSafe/web3.js) is a JavaScript API that sends requests to the Ethereum blockchain (either the real one or your local one). It acts as the middleman between your frontend and your smart contracts

  ```sh
  npm install web3 --save
  ```
  - run `node index.js`  to deploy your smart contract.

 ```sh 
 npm install -g truffle
 ```
