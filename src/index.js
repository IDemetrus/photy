import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// --------------------------------
const userState = { name: 'Anonymous'} // init state (for user in this case)
const reducer = (state = userState, action) => {
    if(action.type === 'LOGIN_SUCCES'){
        console.log(action.payload)
        return state = { name: action.payload }
    }else{
        return state
    }
}
const store = createStore(reducer) // get changes from rootReducer
window.store = store // this command for console view of store

store.subscribe(() => {
    console.log('store has been changed')
})
// --------------------------------

ReactDOM.render(
    /* 1. set Provider for connecting react with redux */
    /* 2. set our store as props of Provider  */
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root'));
