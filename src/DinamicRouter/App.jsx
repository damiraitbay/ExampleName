import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Posts from './Posts';
import PostDetail from './PostDetail';
import './index.css'
import { Suspense } from 'react';
function App() {
  return (
    <div>
       <Router>
        <Suspense fallback={<div className="loader">Жүктелуде...</div>}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/posts" element={<Posts/>}/>
              <Route path="/posts/:id" element={<PostDetail/>}/>
            </Routes>
            </Suspense>
       </Router>
    </div>
  );
}

export default App;
