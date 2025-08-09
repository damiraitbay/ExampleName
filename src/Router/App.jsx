import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Profile from './Profile';
import Navbar from './Navbar';
function App() {
  return (
    <div>
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile" element={<Profile/>}>
            </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
