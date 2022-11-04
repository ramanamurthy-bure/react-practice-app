/* To execute any function when button is clicked,  we will use this onclick event handler*/
import React from 'react'

export const App = () => {
  return (
    <div>
      <button onClick={()=>console.log("Clicked...")}>Click Here<br /></button>
    </div>
  )
}
export default App;