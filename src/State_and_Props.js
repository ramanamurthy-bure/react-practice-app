/* State and Props in React JS
State -> It is used to declare multiple variable in a component
Props -> It is used to send value from one component to other component
we need to use this.prop.var_name to use the parent(App.js) component value in child component(Display.js)
*/

import React, { Component } from 'react'
import Display from './Display'

export default class App extends Component {
  state = {
    name : "Hello World"
  }
  render() {
    return (
      <div>
        <center>
          <h2>{this.state.name}</h2>
          <Display name={this.state.name}/>
        </center>
      </div>
    )
  }
}
