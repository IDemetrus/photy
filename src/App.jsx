import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'



class App extends Component {
  render() {
    console.log(this.props)
    let btn;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Photo App</h1>
        </header>
        <p className="App-intro">
          Welcome, {this.props.name}!
          <button className='App-btn' ref={btn}
            onClick={() => this.props.loginR}>
            Sign in
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}
const mapDispatchToProps = (dispatch) => {

    //loginR = login request*
    //loginR: () => dispatch({type: 'LOGIN_REQUEST'})
    return function loginR(dispatch) {

      dispatch({
        type: 'LOGIN_REQUEST'
      })
  
      VK.Auth.login((r) => { // eslint-disable-line no-undef
        if (r.session) {
          let username = r.session.user.first_name;
          dispatch({
            type: 'LOGIN_SUCCES',
            payload: username
          })
          console.log('clicked Login')
        } else {
          dispatch({
            type: 'LOGIN_FAIL',
            error: true,
            payload: new Error('Ошибка авторизации')
          })
        }
      },4); // запрос прав на доступ к photo
    }

  }



export default connect(mapStateToProps, mapDispatchToProps)(App);//this method connect one function(getState) with second(dispatch) to this component App/
