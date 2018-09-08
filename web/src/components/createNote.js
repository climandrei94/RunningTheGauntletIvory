import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createNoteAction} from '../actions/userActions'

class CreateNote extends Component {
  constructor () {
    super()
    this.state = {
      noteName: undefined,
      noteText: undefined
    }
  }

  inputChange = event => {
    let {name, value} = event.target
    console.log('name', name,value)
    this.setState({[name]:value})
  }

  render () {
    return (
      <div>
        Title: <input type='text' name='noteName' onChange={this.inputChange} /> <br />
        Text: <input type='text' name='noteText' onChange={this.inputChange} /> <br />
        <button onClick={this.props.createNoteAction.bind(null,this.state)}> Create Note </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.email
})

const mapDispachToProps = {
  createNoteAction
}

export default connect(mapStateToProps, mapDispachToProps)(CreateNote)
