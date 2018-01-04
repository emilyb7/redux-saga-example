import React, { Component } from 'react'
import { call, put } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'

const API = 'http://api.giphy.com/v1/stickers/random?key=dc6zaTOxFJmzC'

const request = url => {
  return fetch(url)
    .then(res => res.json())
    .catch(e => console.log(e))
}

export function* fetchData() {
  yield call(request, API)
  yield put({ type: 'DATA_LOADED' })
}

class App extends Component {
  render = () => (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}

export default App
