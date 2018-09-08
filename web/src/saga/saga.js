import { all, takeLatest, put } from 'redux-saga/effects'
import Constants from '../constants/constants'
import {loginWithSucces} from '../actions/userActions'

function * doLogin (userInfo) {
  yield put(loginWithSucces(userInfo.payload.email))
}

function * saga () {
  yield all([
    takeLatest(Constants.LOGIN_ACTION, doLogin)
  ])
}

export default saga
