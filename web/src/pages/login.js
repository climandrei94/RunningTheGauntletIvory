import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginAction } from '../actions/userActions'

class LoginPage extends Component {
  constructor () {
    super()
    this.state = {
      email: undefined,
      pswd: undefined
    }
  }

  inputChange = event => {
      let {name, value} = event.target
      this.setState({[name]:value})
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
            email : <input type='text' name='email' onChange={this.inputChange} /> <br />
            password: <input type='password' name='pswd' onChange={this.inputChange} /> <br />
        <button onClick={this.props.loginAction.bind(null, this.state)}>Login</button>
      </div>
    )
  }
}

const mapDispachToProps = { loginAction }

export default connect(null, mapDispachToProps)(LoginPage)
