import React, { Component } from 'react'

// import { Button, Modal, TextArea, Form } from 'react-bootstrap'
import axios from 'axios';

// import $ from 'jquery';

// import 'bootstrap/dist/css/bootstrap.min.css';


export default class UpdateForm extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         iname: this.props.post.name, //Initial form filled values
    //         iemail: this.props.post.email,  //Initial form filled values
    //         imessage: this.props.post.message,  //Initial form filled values
    //     }
    // }

    // handleChange = event => {
    //     let nam = event.target.name;
    //     let val = event.target.value;
    //     this.setState({

    //         [nam]: val,

    //     });


    // }


    handleSubmit = event => {
        event.preventDefault();

        // const post = {
        //     name: this.state.iname,
        //     email: this.state.iemail,
        //     message: this.state.imessage,
        // };




        axios.delete(`http://localhost:8000/api/post/${this.props.post.id}/delete/`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Info. Successfully Deleted!");
            })
            .catch(error => {
                console.log(error);
            })
    }



    render() {


        return (


            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="delete-button">
                        <button className="button is-info is-light marginr-5" title="Delete details" style={{ float: 'right' }}><i className="fas fa-trash"></i></button>
                    </div>
                </form>

            </div>
        )
    }
}
