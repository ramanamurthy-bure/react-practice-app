/*
useContext -> Context provides a way to pass data through the component tree without having to pass props down manually at every level
*/
import React from 'react'
import ComponentC from './ComponentC';

export const UserContext = React.createContext();

export const App = () => {
  return (
    <div>
      <center>
        <UserContext.Provider value={"Ramana"}>
          <ComponentC />
        </UserContext.Provider>
      </center>        
    </div>    
  )
}
export default App;