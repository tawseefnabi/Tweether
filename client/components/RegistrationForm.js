import React from 'react'
import Button from "./Button"

const Input = ({ title, value, onChange }) => (
  <div>
    <label>
      {title}
    </label>

    <input value={value} onChange={onChange} />

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
    gravatarEmail: "",
    bio: "",
  }  
  updateField = (field, e) => {
    const newState = {};
    newState[field] = e.target.value;
    this.setState(newState);
  }
  render() {
    const {onClose} = this.props;
    return (
      <form>
        <h3> Create your accoubt</h3>
        <Input 
        title="First Name"
        onChange={ e => this.updateField.bind("firstName", e)}
        />
         <Input 
        title="Last Name"
        onChange={ e => this.updateField.bind("lastName", e)}
        />
         <Input 
        title="Desired Name"
        onChange={ e => this.updateField.bind("username", e)}
        />
         <Input 
        title="Gravatar  Email"
        onChange={ e => this.updateField.bind("gravatarEmail", e)}
        />
         <Input 
        title="Bio"
        onChange={ e => this.updateField.bind("bio", e)}
        />
        <footer>
          <Button onClick={this.createUser}>
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