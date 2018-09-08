import { all, takeLatest, put } from 'redux-saga/effects'
import Constants from '../constants/constants'
import {loginWithSucces, putNotesToState} from '../actions/userActions'

function * doLogin (userInfo) {
  yield put(loginWithSucces(userInfo.payload.email))
}

function * createNoteSaga (noteInfo) {
  console.log('create', noteInfo)
  yield put(putNotesToState(noteInfo.payload))
}

function * saga () {
  yield all([
    takeLatest(Constants.LOGIN_ACTION, doLogin),
    takeLatest(Constants.CREATE_NOTE, createNoteSaga)
  ])
}

export default saga
