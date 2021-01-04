import React, { Component } from 'react'

// import { Button, Modal, TextArea, Form } from 'react-bootstrap'
import axios from 'axios';

// import DjangoCSRFToken from 'django-react-csrftoken';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class UpdateForm extends Component {

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`http://localhost:8000/api/post/${this.props.post.id}/delete/`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload(false);
                alert("Info. Successfully Deleted!");
            })
            .catch(error => {
                console.log(error);
                alert("Sorry we couldn't proceed your request at this time. Please try again later..");
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <DjangoCSRFToken/> */}
                    <div className="delete-button">
                        <button className="button is-info is-light marginr-5" title="Delete details" style={{ float: 'right' }}><i className="fas fa-trash"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}
