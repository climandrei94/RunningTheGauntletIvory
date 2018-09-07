import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import localForage from 'localforage'
import ReactDOM from 'react-dom'
import App from './App'
import reducer from './reducer/reducer'
import saga from './saga/saga'

localForage.config({
  driver: localForage.LOCALSTORAGE,
  name: 'Ivory',
  version: 1.0,
  storeName: 'globalstate'
})

const persistConfig = {
  key: 'root',
  storage: localForage,
  blacklist: []
}
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(saga)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root')
)
