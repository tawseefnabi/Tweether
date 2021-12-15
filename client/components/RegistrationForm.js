import React from 'react'
import Button from "./Button"
import { createUser } from "../web3/users"
const Input = ({ title, name, value, onChange }) => (
  <div>
    <label>
      {title}
    </label>

    <input name={name} value={value} onChange={onChange} />

    <style jsx>{`
      div {
        border-bottom: 1px solid rgba(0,0,0,0.13);
        margin: 0 -14px;
        padding: 0 14px;
      }
      div:first-of-type {
        border-top: 1px solid rgba(0,0,0,0.13);
      }
      label {
        font-size: 13px;
        color: rgba(81,81,112,0.66);
        text-transform: uppercase;
        display: block;
        margin-top: 8px;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font-size: 17px;
        padding-top: 8px;
        padding-bottom: 13px;
        border: none;
      }
      input:focus {
        border: none;
        outline: none;
      }
    `}</style>
  </div>
)

export default class RegistrationForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    bio: "",
    gravatarEmail: ""
  }  
 
  updateField = (event) => {
    const field = event.target.name;
    const newState = {};
    newState[field] = event.target.value;
    this.setState(newState);
  }
  createUserFunc = async (e) => {
    e.preventDefault();
    // some quick validation checks
    for (let key in this.state) {
      if (!this.state[key]) {
        return alert(`you must  fill in your ${key}!`);
      }
    }
    const {firstName, lastName, username, bio, gravatarEmail} = this.state;
    const user = await createUser(firstName, lastName, username, bio, gravatarEmail);
    try {
      // open the MetaMask modal
      await createUser(username, firstName, lastName, bio, gravatarEmail)
      alert('User created successfully!')
    } catch (error) {
      console.log("error in createUser:",error);
    }
  }
  render() {
    const {onClose} = this.props;
    return (
      <form>
        <h3> Create your accoubt</h3>
        <Input 
        title="First Name"
        name="firstName"
        onChange={this.updateField}
        />
         <Input 
        title="Last Name"
        name="lastName"
        onChange={this.updateField}
        />
         <Input 
        title="Desired Name"
        name="username"
        onChange={this.updateField}
        />
         <Input 
        title="Bio"
        name="bio"
        onChange={this.updateField}
        />
         <Input 
        title="Gravatar  Email"
        name="gravatarEmail"
        onChange={this.updateField}
        />
        <footer>
          <Button onClick={this.createUserFunc}>
            Create
          </Button>
        </footer>
        <style jsx>{`
          h3 {
            padding-bottom: 10px;
          }
          footer {
            text-align: right;
            padding-top: 16px;
          }
        `}</style>
      </form>
    )

  }
}