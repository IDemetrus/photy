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
          Albums
          <button className='App-btn' ref={btn}
            onClick={this.props.loginR}>
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
  return {
    //loginR = login request*
    loginR: () => dispatch({type: 'LOGIN_REQUEST'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);//this method connect one function(getState) with second(dispatch) to this component App/
