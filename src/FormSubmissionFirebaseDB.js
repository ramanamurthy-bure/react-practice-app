import React, { useState } from 'react'
import axios from 'axios';

export const App = () => {
    const [data,setData] = useState(
        {
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    )
    const {username,email,password,confirmPassword} = data;

    const onchangeEventHanler = e =>{
        setData({...data,[e.target.name]:e.target.value});
        }

    const onSubmitEventHandler = e =>{
        e.preventDefault();
        axios.post("https://myreactapp-50718-default-rtdb.firebaseio.com/register.json",data).then(()=>alert("Submitted Successfully"));       
    }

  return (
    <div>
        <center>
            <form onSubmit={onSubmitEventHandler}>
                <input type="text" name="username" placeholder='User Name' value={username} onChange={onchangeEventHanler}></input><br/>
                <input type="email" name="email" placeholder='Email' value={email} onChange={onchangeEventHanler}></input><br/>
                <input type="password" name="password" placeholder='password' value={password} onChange={onchangeEventHanler}></input><br/>
                <input type="password" name="confirmPassword" placeholder='Confirm Password' value={confirmPassword} onChange={onchangeEventHanler}></input><br/>
                <input type="submit" name="submit"></input>
            </form>
        </center>
    </div>
  )
}

export default App;
