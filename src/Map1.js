/* To iterate 1 arry of value and print it in individual component we can use Map()
array_variable.map(value,index) => <li>{ value }</li>)
*/

import React from 'react'

export const App = () => {
  const arr = ["React JS","Node JS","Express JS","Angular JS"];
  return (
    <div>
      {
        arr.map(
                  (value,index)=><li key={index}>{value}</li>
               )
      }
    </div>
  )
}

export default App;