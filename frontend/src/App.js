import React, { Component } from "react";

import { render } from "react-dom";
import Post from './Post'

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
             <Post post={ post } />
            
          );
        })}
      </ul>
    );
  }
}

export default App;
