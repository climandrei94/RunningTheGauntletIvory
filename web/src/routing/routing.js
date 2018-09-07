import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './privateRoute'

class Routing extends Component {
  noMatch = () => {
    return <h1>Invalid adress, page not found</h1>
  }

  loginOrGoHome = () => {
    
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' render={this.loginOrGoHome} />
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
