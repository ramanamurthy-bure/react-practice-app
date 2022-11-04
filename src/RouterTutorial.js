import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';

export const App = () => {
  return (
    <div>
        <Router>
        <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/Dashboard' exact element={<Dashboard/>}></Route>
                <Route path='/About' exact element={<About/>}></Route>
            </Routes>        
        </Router>        
    </div>
  )
}
export default App;