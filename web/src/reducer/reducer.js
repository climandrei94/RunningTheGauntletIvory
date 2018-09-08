import Constants from '../constants/constants'

const initState = {
  isLogedIn: false,
  notes: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.LOGIN_SUCCES:
      return {
        ...state,
        isLogedIn: true,
        email: action.payload
      }
    case Constants.PUT_NOTES_TO_STATE:
      return {
        ...state,
        notes: [...action.payload, ...state.notes]
      }
    default:
      return state
  }
}

export default reducer
