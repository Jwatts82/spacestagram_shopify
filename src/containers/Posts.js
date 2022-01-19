import React, { Component } from 'react';

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
          })
    }

  render() {
    return  (
        <div>
            <h1>NASA APP</h1>
        </div>

        )
    }
}

export default Posts