import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Home1 = () => {
const navigate = useNavigate();

  return (
    <div>
        <center>
          <h4>Welcome to Home1 Page!</h4>
          <button onClick={()=>navigate('/dashboard')}>Login</button>
        </center>
  </div>
  )
}
export default Home1;
