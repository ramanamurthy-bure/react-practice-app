import React, { Component,useState } from 'react'
import logo from './logo.svg';
import './App.css';

export const App = () => {
  const [name,setName] = useState("Ramana is the initial name");
  return (
    <div className="App">
      <header className="App-header">
        <h3>This is an exapmple to use state in React</h3>
        <h4>To get the value from state we need to use this.state.name_of_the_var: <br /> {name}</h4>                
        <button onClick={()=>setName("Ramana changed to Bure Ramana Murthy")}>Change Me</button>
      </header>
    </div>
  )
}

export default App;
