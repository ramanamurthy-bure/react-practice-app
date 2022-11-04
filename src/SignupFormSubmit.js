import React, { useState } from 'react'

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

    const submitEventHandler = e =>{
        e.preventDefault();
        if(password === confirmPassword){
            console.log("Passwords are matching!")
            console.log(data);
        }else{
            console.log("Passwords are NOT matching!")
            console.log(data);
        }       
    }

  return (
    <div>
        <center>
            <form onSubmit={submitEventHandler}>
                <input type="text" name="username" value={username} onChange={onchangeEventHanler}></input><br/>
                <input type="email" name="email" value={email} onChange={onchangeEventHanler}></input><br/>
                <input type="password" name="password" value={password} onChange={onchangeEventHanler}></input><br/>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={onchangeEventHanler}></input><br/>
                <input type="submit" name="submit"></input>
            </form>
        </center>
    </div>
  )
}

export default App;
