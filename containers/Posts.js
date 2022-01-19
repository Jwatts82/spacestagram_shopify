import React, { Component } from 'react';
import Post from '../components/Post'

const My_Key = process.env.REACT_APP_NASA_API_KEY;

class Posts extends Component {
    state={
        posts: []
    }

    componentDidMount(){
        fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${My_Key}`)
          .then(res => res.json())
          .then(data => {
              console.log(data.photos)
              this.setState({
                  posts: data.photos
              })
          })
    }

  render() {
      const posts = this.state.posts.map((post, i) => <Post 
        key={i} 
        status={post.rover.status} 
        camera={post.camera.full_name} 
        rover={post.rover.name} 
        date={post.earth_date} 
        img={post.img_src}/>)

    return (
      <div>
        {posts}
      </div>
    );
    }
}

export default Posts