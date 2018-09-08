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
    console.log('list', this.props.notes)
    return (
      <div>
        {this.props.notes.title}
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
