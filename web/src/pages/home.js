import React, {Component} from 'react'
import {connect} from 'react-redux'

class HomePage extends Component {
  render () {
    return (
      <div>
        <h1>Home</h1>
        <h1>{this.props.userEmail}</h1>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.email
})

export default connect(mapStateToProps, null)(HomePage)
