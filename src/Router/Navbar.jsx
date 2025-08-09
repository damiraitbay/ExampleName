import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
   <Link to="/about">about</Link> || 
   <Link to="/profile">profile</Link>
    </div>
  );
}

export default Navbar;
