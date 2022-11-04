/* To execute any function when button is clicked,  we will use this onclick event handler*/
import React, { useState } from 'react'

export const App = () => {
  const [data,setData]=useState({
    username:"",
    password:""
  })

  const {username,password} = data;
  const onChangeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" name="username" value={username} onChange={onChangeHandler}></input><br/>
          <input type="text" name="password" value={password} onChange={onChangeHandler}></input><br/>
          <input type="submit" name="submit"></input>
        </form>
      </center>
    </div>
  )
}
export default App;