import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className='navbar'>
        <div>
          <h1 className='jobs'>Jobs Hut</h1>
        </div>
        <div>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/applied'>Applied Jobs</Link>
            <Link to='/blog'>Blog</Link>
            <button >Start Applying</button>
          </nav>
        </div>
      </div>

      <div className='header'>
        <div>
          <h1>One Step Closer To Your Dream Job</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button>Get Started</button>
        </div>
        <div>
          <img src="../../../assets/All Images/P3OLGJ1 copy 1.png" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Header;