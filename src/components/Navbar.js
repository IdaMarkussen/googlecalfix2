import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul className='nav'>
        <h3>Visma Calender</h3>
        <div>
          <div className='nav-item'>
            <li>Oversikt</li>
            <li>Nyheter</li>
          </div>
          <div className='nav-item'>
            <input type='text' placeholder='Search...' />
            <li>🔔</li>
            <li>⚙</li>
            <li>Info</li>
          </div>
        </div>
        <p>ˬ</p>
      </ul>
    </nav>
  );
}

export default Navbar;
