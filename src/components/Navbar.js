import React, { Component } from 'react';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-wrapper'>
          <h2 type='text'>Spacestagram</h2>
          <div className='nav-items'>
            <div className='icon user-profile'></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
