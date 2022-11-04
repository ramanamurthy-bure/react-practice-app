import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h1>I am from Display Component</h1>
        <h2>{this.props.name} - I got this using {this.props.var_name}. It was sent from the App component to Display component using props</h2>
      </div>      
    )
  }
}
