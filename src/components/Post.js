import React from 'react';
import '../styles/Post.css';
import Like from './Like'

const Post = ( {status, camera, rover, date, img}) => {
  return (
    <div>
      <section className='main'>
        <div className='wrapper'>
          <div className='left-col'>
            <div className='post'>
              <div className='info'>
                <div className='user'>
                  <div className='profile-pic'>
                    {/* <img src="./img/nasa.jpeg" alt='nasa' /> */}
                  </div>
                  <p className='username'>nasa_rover_channel</p>
                </div>
              </div>
              <img
                src={img}
                id='picture'
                className='post-image'
                alt='Picture By NASA'
              />
              <div className='post-content'>
                <div className='reaction-wrapper'>
                    <Like />
                </div>
                <p className='description'>
                  {rover} Rover - {camera}
                </p>
                <p className='date'>{date}</p>
                <p className='date'> Status - {status}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Post