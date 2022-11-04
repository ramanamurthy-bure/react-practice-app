import React, { useEffect,useState } from 'react'

export const App = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()
      ).then(json=>setData(json))
    },[])    
  return (
    <div>
        {data.map(item=><h6 key={item.id}>{item.id} : {item.title}</h6>)}
    </div>
  )
}
export default App;