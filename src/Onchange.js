/* To execute any function when button is clicked,  we will use this onclick event handler*/
import React, { useState } from 'react'

export const App = () => {
  const [userName,setUserName]=useState("");
  const textboxhandler = e =>{
    setUserName(e.target.value)
  }
  return (
    <div>
      <input onChange={textboxhandler} type="text" placeholder="UserName" value={userName} name="user"></input>
      <p>{userName}</p>
    </div>
  )
}
export default App;