/* To iterate 1 arry of value and print it in individual component we can use Map()
array_variable.filter(variable) => condition }</li>)
*/

import React from 'react'

export const App = () => {
  const arr = ["React JS","Node JS","Express JS","Angular JS","Java","Python","C","C++"];
  const filtered = arr.filter(varname=>varname.includes("JS"));
  return (
    <div>
      {
        filtered.map(
                  ((value,index)=><h5>{value}</h5>)
               )
      }
    </div>
  )
}

export default App;