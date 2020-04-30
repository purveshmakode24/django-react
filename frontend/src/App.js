import React, { Component } from "react";

import axios from 'axios';

// import { render } from "react-dom";
import Post from './Components/Post';
import PostForm from './Components/PostForm';

import './static/mainnew.css';


import 'bulma/css/bulma.css'
import APIDetails from "./Components/APIDetails";



// function App() {
//   return (
//      <Post />

//   );
// }





class App extends Component {

  // USING FETCH API ----------------------------------------->

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //     loaded: false,
  //     placeholder: "Loading"
  //   };
  // }

  // componentDidMount() {
  //   fetch("http://localhost:8000/api/post")
  //     .then(response => {
  //       if (response.status > 400) {
  //         return this.setState(() => {
  //           return { placeholder: "Something went wrong!" };
  //         });
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState(() => {
  //         return {
  //           data,
  //           loaded: true,
  //           placeholder: 'loading...'
  //         };
  //       });
  //     });
  // }


  // USING AXIOS----------------------------------->

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/post`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (
      <ul>

        <div>

          <div className="columns">

            <div className="column is-half">
              <PostForm />
              <APIDetails />
            </div>

            <div className="column" >
            <p className="paddingt-20 paddingl-20 paddingr-20" style={{ fontSize: '30px', color: 'blue' }}>User details:</p>
              {this.state.posts.map(post => {
                return (
                  <Post key={post.id} post={post} />
                );
              })}
            </div>

          </div>


        </div>
      </ul>
    );
  }
}

export default App;
