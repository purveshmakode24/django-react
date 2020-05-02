// import React, { Component } from "react";
import React from "react";

import UpdateForm from "./UpdateForm";
import DeleteForm from "./DeleteForm";

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
    <div className="paddingall-20">
      <div className="tile">
        <article className="tile is-child notification is-info">
          <p className="title">{props.post.name}</p>
          <p className="subtitle">{props.post.email}</p>
          <h4>{props.post.message}</h4>
          <UpdateForm post={props.post} />
          <DeleteForm post={props.post} />
        </article>
      </div>
    </div>
  )
}

