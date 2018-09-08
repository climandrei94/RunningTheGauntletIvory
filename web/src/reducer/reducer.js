import Constants from '../constants/constants'

const initState = {
  isLogedIn: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.LOGIN_SUCCES:
      return {
        ...state,
        isLogedIn: true,
        email: action.payload
      }
    default:
      return state
  }
}

export default reducer
