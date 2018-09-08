import React, {Component} from 'react'
import {connect} from 'react-redux'
import CreateNote from '../components/createNote'
import ListOfNotes from '../components/listOfNotes'
class HomePage extends Component {
  render () {
    return (
      <div>
        <h1>Home</h1>
        <h1>{this.props.userEmail}</h1>
        <CreateNote />
        <ListOfNotes />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.email
})

export default connect(mapStateToProps, null)(HomePage)
