import React from 'react'
import Link from "next/link"

import { Center } from "./Layout"
import Logotype from "../icons/logotype.svg"

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <Center>
          <Link href="/">
            <a className="logotype">
              {/* <Logotype /> */}
            </a>
          </Link>
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