import React from 'react'
import { eth,getInstance } from "../web3/provider"
import { getUserInfo, createUser } from '../web3/users'
import { getTweetInfo, createTweet } from '../web3/tweets' 
import UserStorage  from '../web3/artifacts/UserStorage.json'

import { Page, Center} from '../components/Layout'
import Button from "../components/Button" 
import Modal  from '../components/Modal'
import RegistrationForm from '../components/RegistrationForm'
export default class IndexPage extends React.Component {
  // Add the default state:
  state = {
    showRegisterModal: false,
  }
  logUser = async () => {
    const userInfo = await getUserInfo(1)
    console.log('userInfo', userInfo);
  }
  createUser1 = async () => {
    const tx = await createUser("tristan")
    console.log(tx)
  }
  logTweet = async () => {
    const tweetInfo = await getTweetInfo(1)
    console.log('tweetInfo', tweetInfo);
  }
  createTweet1 = async () => {
    const tx = await createTweet( "tweet1")
    console.log(tx)
  }
  async componentDidMount() {
    try {
      await ethereum.enable() // Prompt user to let our DApp access their addresses
      const addresses = await eth.getAccounts() // Get user's ETH addresses 
    //   // get eth balance  
    //   const balance = await eth.getBalance(addresses[0])
    //   const storage = await getInstance(UserStorage)
    // const { username } = await storage.profiles.call(1)
    } catch (err) {
      console.log("err",err)
      console.error("User denied access to their ETH addresses!")
    }
  }
  
  toggleRegisterModal = async() => {
    const { showRegisterModal } = this.state
    this.setState({ showRegisterModal: !showRegisterModal })
  }
  render() {
    const { showRegisterModal } = this.state // Get the state
    return (
      // <Page>
      //   <button onClick={this.logUser}>
      //     Get user with ID 1
      //   </button>
      //   <button onClick={this.createUser1}>
      //     Create User
      //   </button>
      //   <button onClick={this.logTweet}>
      //     Get tweet with ID 1
      //   </button>
      //   <button onClick={this.createTweet1}>
      //     Create Tweet
      //   </button>
      // </Page>    
      <Page>
      <Center>
        <h2>
          A <mark>decentralized</mark>, <mark>uncensorable</mark> Twitter clone built on Ethereum
        </h2>

        <div className="right-side">
           {/* Add this: */}
           <Button style={{
              paddingLeft: 64, 
            }} onClick={this.toggleRegisterModal}>
              {/* <MetaMaskIcon /> */}
              Create your account
            </Button>
          <div className="disclaimer">
            <p>
              MetaMask will automatically open and ask you to confirm a transaction.
            </p>
            <p>
              Please note that creating an account on the Ethereum blockchain costs a small amount of Ether.
            </p>
          </div>
        </div>
      </Center>
        {showRegisterModal && (
          <Modal onClose={this.toggleRegisterModal}> 
            <RegistrationForm/>
          </Modal>
        )}
      <style jsx global>{`
        html, body {
          min-height: 100%;
        }
        body {
          background-color: #262740;
          background-image: url("/static/images/landing-bg.jpg");
          background-size: cover;
          background-position: center center;
        }
      `}</style>

      <style jsx>{`
        h2 {
          font-size: 50px;
          color: #FFFFFF;
          line-height: 78px;
          position: relative;
          text-transform: uppercase;
          max-width: 520px;
          display: inline-block;
          
        }
        mark {
          color: inherit;
          background-color: #9F99EC;
          padding: 0 7px;
        }
        .right-side {
          float: right;
          position: relative;
          max-width: 320px;
          text-align: center;
          margin-top: 120px;
        }
        .right-side :global(svg) {
          position: absolute;
          margin-left: -46px;
          margin-top: -8px;
        }
        .disclaimer {
          font-size: 14px;
          color: rgba(255,255,255,0.8);
          line-height: 23px;
          font-weight: 400;
          margin-top: 23px;
        }
      `}</style>
    </Page>
    
      )
  }
}