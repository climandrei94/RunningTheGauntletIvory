import { all, takeLatest, put, call } from 'redux-saga/effects'
import Constants from '../constants/constants'
import {loginWithSucces, putNotesToState} from '../actions/userActions'
import { login } from '../networking/networking'

function * doLogin (userInfo) {
  console.log('saga', userInfo)
  let {email, pswd} = userInfo.payload
  let responseFromServer = yield call(login, email, pswd)
  console.log(responseFromServer)
  yield put(loginWithSucces(userInfo.payload.email))
}

function * createNoteSaga (noteInfo) {
  console.log('create', noteInfo)
  let notes = {
    ...noteInfo.payload,
    id: 1
  }
  yield put(putNotesToState(notes))
}

function * saga () {
  yield all([
    takeLatest(Constants.LOGIN_ACTION, doLogin),
    takeLatest(Constants.CREATE_NOTE, createNoteSaga)
  ])
}

export default saga
