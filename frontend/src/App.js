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
    posts: [],
    server_not_connected_msg: '',
    done: false,
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/post`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts, done: 'true' });
      })
      .catch(error => {
        this.setState({ server_not_connected_msg: "Can't fetch data at this moment", done: 'true' });
        console.log(error);
        alert("We couldn't reach our servers. You may not be connected to internet. Please try again...");
      })
  }

  render() {

    // error/connection validation

    console.log(this.state.server_not_connected_msg);

    // var renderTemp;
    var error = this.state.server_not_connected_msg;
    var errmsg = `<div style="color: red; font-size: 20px; padding:20px">${this.state.server_not_connected_msg}</div>`;
    if (error) {
      // renderTemp = this.state.server_not_connected_msg;
      document.getElementById('connerr').innerHTML = errmsg;
    }




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
              {/* if error while fetching */}
              <div id="connerr"></div>
              {/* ---------- */}

              {/* Conditional rendering for fetching data */}
              {

                !this.state.done ? <div style={{ fontSize: '20px', padding: '20px', color: 'green' }}>Fetching data...</div>

                  : this.state.posts.map(post => {
                    return (
                      <Post key={post.id} post={post} />
                    );
                  })

              }

              {/* ----------------- */}

            </div>

          </div>
        </div>
      </ul>
    );
  }
}


export default App;
