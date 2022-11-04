/* useEffect will run every time count value changed as the count is dependecy in useEffect function.i.e second arg as [count]*/

import React, { useEffect, useState } from 'react'

export const App = () => {
  const [count,setCount] = useState(0);
  useEffect(()=>console.log("Clicked"),[count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}
export default App;
