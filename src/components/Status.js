import React from 'react';
import '../styles/Status.css'

function Status() {
  return (
    <div>
      <section class='main'>
        <div class='wrapper'>
          <div class='left-col'>
            <div class='status-wrapper'>
              <div class='status-card'>
                <div class='profile-pic'>
                  <img src='cover 1.jpg' alt='img' />
                </div>
                <p class='username'>Jared Rice</p>
              </div>
              <div class='status-card'>
                <div class='profile-pic'>
                  <img src='cover 2.jpg' alt='img' />
                </div>
                <p class='username'>A_Odie</p>
              </div>
              <div class='status-card'>
                <div class='profile-pic'>
                  <img src='cover 3.jpg' alt='img' />
                </div>
                <p class='username'>Meesh</p>
              </div>
              <div class='status-card'>
                <div class='profile-pic'>
                  <img src='cover 4.jpg' alt='img' />
                </div>
                <p class='username'>Watts_Happen</p>
              </div>
              <div class='status-card'>
                <div class='profile-pic'>
                  <img src='cover 5.jpg' alt='img' />
                </div>
                <p class='username'>Spc_Frntr</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Status