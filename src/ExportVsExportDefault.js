/*
if we use just 'export' then we need to use 'import {Component}' for importing it into other component
if we use just 'export default' then we need to use 'import Component' for importing it into other component
*/
import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'

export const App = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App;