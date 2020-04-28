// import React, { Component } from "react";
import React from "react";

import UpdateForm from "./UpdateForm"

// export default class Post extends Component {

//   render(){
//     return (
//       <div className="post">
          
//             <h1 className="ui header">{this.props.post.name}</h1>
//             <h2 className="ui header">{this.props.post.email}</h2>
//             <h3 className="ui header">{this.props.post.message}</h3>

//             <UpdateForm post={this.props.post} />
          
          
//       </div>

//   );
//   }
 
// }



export default function Post(props) {
  return (
    <div className="post">
      
      <h1 className="ui header">{props.post.name}</h1>
            <h2 className="ui header">{props.post.email}</h2>
            <h3 className="ui header">{props.post.message}</h3>

            <UpdateForm post={props.post} />
          
    </div>
  )
}

