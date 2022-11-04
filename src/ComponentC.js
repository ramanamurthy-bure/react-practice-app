import React from 'react'
import {UserContext} from './App.js';

export const ComponentC = () => {
  return (
    <div>
      <center>
        <UserContext.Consumer>
            {value => <div>{value}</div>}
        </UserContext.Consumer>
      </center>      
    </div>
  )
}
export default ComponentC;