/*
Redux In React JS
-> It is all about managing state values in multiple components at a time, using redux store

Store: Combined application state from all components(BigJavaScript object)
Provider : Provides the state data to all components
Components : Encapsulates the main component
Actions->Reducers->Store
*/

import React from 'react';
import Inc from './Inc';

export const App = ({count}) => {
  return (
    <div>
      <center>
        Conut from App JS component : {count} <br/><hr/>  
        <Inc />
      </center>
    </div>
  )
}
export default App;