/* To iterate 1 arry of value and print it in individual component we can use Map()
array_variable.filter(variable) => condition }</li>)
*/

import React from 'react'

export const App = () => {
  const arr = [10,20,30,40,50,60,70];
  const filtered = arr.filter(varname=>varname>40);
  return (
    <div>
      {
        filtered.map(
                  ((value,index)=><li key={index}>{value}</li>)
               )
      }
    </div>
  )
}

export default App;