import React, { Component,useState } from 'react'
import logo from './logo.svg';
import './App.css';

export const App = () => {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h4>To get the value useState we can  to use var_name in curly brackets: <br /> {count}</h4>                
        <button onClick={()=>setCount(count+1)}>Change Me</button>
      </header>
    </div>
  )
}
export default App;
