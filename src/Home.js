import React, {useState} from 'react'
import {Navigate} from 'react-router';

export const Home = () => {
  const [auth,setAuth] = useState(false);
  if(auth)
  {
    return <Navigate to='/dashboard'></Navigate>
  }
  return (
    <div>
        <center>
          <h4>Welcome to Home Page!</h4>
          <button onClick={()=>setAuth(true)}>Login</button>
        </center>
  </div>
  )
}
export default Home;
