import React from 'react';
import '../styles/Status.css'

function Status() {
  return (
    <div>
      <section className='main'>
        <div className='wrapper'>
          <div className='left-col'>
            <div className='status-wrapper'>
              <div className='status-card'>
                <div className='profile-pic'>
                  <img src='cover 1.jpg' alt='img' />
                </div>
                <p className='username'>Jared Rice</p>
              </div>
              <div className='status-card'>
                <div className='profile-pic'>
                  <img src='cover 2.jpg' alt='img' />
                </div>
                <p className='username'>A_Odie</p>
              </div>
              <div className='status-card'>
                <div className='profile-pic'>
                  <img src='cover 3.jpg' alt='img' />
                </div>
                <p className='username'>Meesh</p>
              </div>
              <div className='status-card'>
                <div className='profile-pic'>
                  <img src='cover 4.jpg' alt='img' />
                </div>
                <p className='username'>Watts_Happen</p>
              </div>
              <div className='status-card'>
                <div className='profile-pic'>
                  <img src='cover 5.jpg' alt='img' />
                </div>
                <p className='username'>Spc_Frntr</p>
              </div>
              <div className='status-card'>
                <div className='profile-pic'>
                  <img src='cover 6.jpg' alt='img' />
                </div>
                <p className='username'>Gideon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Status