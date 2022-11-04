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

    const onSubmitEventHandler = e =>{
        e.preventDefault();
        if(username.length<5)
        {
            alert("Username must be at least 5 characters");
        }else if(password !== confirmPassword)
        {
            alert("Passwords are not matching!");
        }else
        {
            console.log(data);
        }        
    }

  return (
    <div>
        <center>
            <form onSubmit={onSubmitEventHandler}>
                <input type="text" name="username" placeholder='Username' value={username} onChange={onchangeEventHanler}></input><br/>
                <input type="email" name="email" placeholder='Email' value={email} onChange={onchangeEventHanler}></input><br/>
                <input type="password" name="password" placeholder='Password' value={password} onChange={onchangeEventHanler}></input><br/>
                <input type="password" name="confirmPassword" placeholder='ConfirmPassword' value={confirmPassword} onChange={onchangeEventHanler}></input><br/>
                {password!==confirmPassword ? <p style={{"color":"red"}}>passwords not matching!</p>:null}
                <input type="submit" name="submit"></input>
            </form>
        </center>
    </div>
  )
}

export default App;
