/* useEffect will run once the return statement is done if there is no depenency.i.e the second argument as []*/

import React, { useEffect, useState } from 'react'

export const App = () => {
  const [count,setCount] = useState(0);
  useEffect(()=>console.log("Clicked"),[])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}
export default App;
