import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import {PrivateRoute} from './privateRoute'
import HomePage from '../pages/home'
import LoginPage from '../pages/login'

class Routing extends Component {
  noMatch = () => {
    return <h1>Invalid adress, page not found</h1>
  }

  loginOrGoHome = () => !this.props.isLogedIn ? <LoginPage /> :  <Redirect to='/' />

  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/login' render={this.loginOrGoHome} />
            <PrivateRoute exact path='/' logged={this.props.isLogedIn} component={HomePage} />
            <Route component={this.noMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLogedIn: state.isLogedIn
})

export default connect(mapStateToProps, null)(Routing)
