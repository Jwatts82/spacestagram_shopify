import React from 'react';
import '../styles/Post.css';

const Post = ( {status, camera, rover, date, img}) => {
  return (
    <div>
        <section class="main">
                <div class="wrapper">
                    <div class="left-col">
                        <div class="post">
                            <div class="info">
                                <div class="user">
                                    {/* <div class="profile-pic"><img src="img/nasa.jpeg" alt=""></div> */}
                                    <p class="username">nasa_rover_channel</p>
                                </div>
                            </div>
                            <img src={img} id="picture" class="post-image" alt="Picture By NASA" />
                            <div class="post-content">
                                <div class="reaction-wrapper">
                                <i id="btn" class="far fa-heart" aria-hidden="true"></i>
                                </div>
                                <p class="description">{rover} Rover - {camera}</p>
                                <p class="date">{date}</p>
                                <p class="date"> Status - {status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}


export default Post