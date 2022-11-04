/* To iterate 1 arry of value and print it in individual component we can use Map()
array_variable.map(value,index) => <li>{ value }</li>)
*/

import React from 'react'

export const App = () => {
  const arr = [
    {
      id:1,
      title:"React JS"
    },
    {
      id:2,
      title:"Node JS"
    },
    {
      id:3,
      title:"Express JS"
    },
    {
      id:4,
      title:"Angular JS"
    }];
  return (
    <div>
      {
        arr.map(
                  (value)=><li key={value.id}>{value.title}</li>
               )
      }
    </div>
  )
}

export default App;