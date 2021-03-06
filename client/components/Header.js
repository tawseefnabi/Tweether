import React from 'react'
import Link from "next/link"

import { Center } from "./Layout"
import Logotype from "../icons/logotype.svg"
import { getLoggedInUserId , getUserInfo} from "../web3/users"
import Nav from "./Nav"
// import { getLoggedInUserId } from "../web3/users"
export default class Header extends React.Component {
  state = {
    loggedIn: false,
    userInfo: {}
  }
  async componentDidMount() {
    const userId = await getLoggedInUserId() 

    try {
      const userInfo = await getUserInfo(userId) 

      this.setState({
        loggedIn: true,
        userInfo,
      })
    } catch (err) {
      console.error("Couldn't find logged in user", err)
    }
  }
  render() {
    const { loggedIn, userInfo } = this.state
    return (
      <header>
        <Center>
          <Link href="/">
            <a className="logotype">
              {/* <Logotype /> */}
            </a>
          </Link>
          <nav>
            {loggedIn && (
              <Nav
                userInfo={userInfo}
              />
            )}
          </nav>
        </Center>

        <style jsx>{`
          header {
            background-color: #FFFFFF;
            background-image: url("/static/images/logo.jpg");
            box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
            background-repeat: no-repeat;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            padding:3px;
          }
        `}</style>
      </header>
    )
  }
}