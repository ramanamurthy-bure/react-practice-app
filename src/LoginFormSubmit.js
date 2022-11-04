/*
Prerequisite concepts for submitting login form:
    onClick,onChange & onSubmit
    useState() - React Hook
    Object destructuring
*/

import React, { useState } from 'react'

export const App = () => {
    const [data,setData] = useState({
        username:'',
        password:''
        })

    const {username,password}=data;

    const onchangeHandler= e => {
        setData({...data,[e.target.name]:[e.target.value]})    
    }

    const onSubmitHandler = e =>{
        e.preventDefault();
        console.log(data);
    }
    
  return (
    <div>
        <center>
            <form onSubmit={onSubmitHandler}>
                <input onChange={onchangeHandler} type="text" name='username' value={username}/><br/>
                <input onChange={onchangeHandler} type="password" name='password' value={password}/><br/>
                <input type='submit' name='submit'/>
            </form>
        </center>
    </div>
  )
}

export default App;
