import React from 'react';

const Post = ( {sol, camera, rover, date, img}) => {
  return (
    <div>
        <h1>{sol}</h1>
        <h2>{camera}</h2>
        <h3>{rover}</h3>
        <h4>{date}</h4>
        <img src={img} alt="I am a picture" />
    </div>
  )
}


export default Post