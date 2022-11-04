import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state = {
    name : "I am the value for name variable in state block"
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React Learning</h2>
        <h3>This is an exapmple to use state in React</h3>
        <h4>To get the value from state we need to use this.state.name_of_the_var: <br /> {this.state.name}</h4>                
      </header>
    </div>
    )
  }
}
