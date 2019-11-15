import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore} from 'redux'

const english = {
  eligibleButton: 'Am I eligible?',
  calculatorTitle: 'Rent Cap Calculator',
  eligibleTitle: 'Are you eligible?'
}

const spanish = {
  eligibleButton: 'Porque no los dos?',
  calculatorTitle: 'Estas bien',
  eligibleTitle: 'Como estas'
}

const language = 'english'

const languages = {
  english, spanish
}

const initialState = {
  languages,
  language
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_LANGUAGE':
      return Object.assign({}, state, {
        language: action.language
      })
    default:
      return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
