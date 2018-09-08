import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getNotes} from '../actions/userActions'

class ListOfNotes extends Component {
  constructor () {
    super()
    this.state = {
      noteName: undefined,
      noteText: undefined
    }
  }

  componentDidMount () {
    this.props.getNotes()
  }

  render () {
    return (
      <div>
        {this.props.notes.length > 0 ? this.props.notes[0].noteText : ''}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  notes: state.notes
})

const mapDispachToProps = {
  getNotes
}

export default connect(mapStateToProps, mapDispachToProps)(ListOfNotes)
