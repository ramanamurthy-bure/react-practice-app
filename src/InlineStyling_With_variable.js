import React from 'react'

export const App = () => {
  const h1styling = {
    color:"white",
    backgroundColor: "lightgray",
    textAlign:"center",
    padding:"50px"
    }
  return (
    <div style={{margin:"10px"}}>
      <h1 style={h1styling}> Ramana </h1>
    </div>
  )
}
export default App;