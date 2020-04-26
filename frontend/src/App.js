import React, { Component } from "react";

import { render } from "react-dom";
// import Post from './Post'

import './static/mainnew.css'

// function App() {
//   return (
//      <Post />

//   );
// }





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/post")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true,
            placeholder: 'loading...'
          };
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(post => {
          return (
            //  <Post post={post} />
            <div class="post">
            
              <h1 class="ui header">{post.name}</h1>
              <h2 class="ui header">{post.email}</h2>
              <h3 class="ui header">{post.message}</h3>


              <div class="ui animated button" tabindex="0" bis_skin_checked="1">
                <div class="visible content" bis_skin_checked="1">Next</div>
                <div class="hidden content" bis_skin_checked="1">
                  <i class="right arrow icon"></i>
                </div>
              </div>
              <div class="ui vertical animated button" tabindex="0" bis_skin_checked="1">
                <div class="hidden content" bis_skin_checked="1">Shop</div>
                <div class="visible content" bis_skin_checked="1">
                  <i class="shop icon"></i>
                </div>
              </div>
              <div class="ui animated fade button" tabindex="0" bis_skin_checked="1">
                <div class="visible content" bis_skin_checked="1">Sign-up for a Pro account</div>
                <div class="hidden content" bis_skin_checked="1">
                  $12.99 a month
                </div>
              </div>

              

            </div>


          );
        })}
      </ul>
    );
  }
}

export default App;
