import Constants from '../constants/constants'

export const loginAction = userInfo => ({
  type: Constants.LOGIN_ACTION,
  payload: userInfo
})

export const loginWithSucces = userEmail => ({
  type: Constants.LOGIN_SUCCES,
  payload: userEmail
})
