import Constants from '../constants/constants'

export const loginAction = userInfo => ({
  type: Constants.LOGIN_ACTION,
  payload: userInfo
})

export const loginWithSucces = userEmail => ({
  type: Constants.LOGIN_SUCCES,
  payload: userEmail
})

export const createNoteAction = noteInfo => ({
  type: Constants.CREATE_NOTE,
  payload: noteInfo
})

export const putNotesToState = notes => ({
  type: Constants.PUT_NOTES_TO_STATE,
  payload: notes
})

export const getNotes = () => ({
  type: Constants.GET_NOTES
})
