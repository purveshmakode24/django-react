import React, { Component } from 'react'

// import { Button, Modal, TextArea, Form } from 'react-bootstrap'
import axios from 'axios';

// import $ from 'jquery';

// import 'bootstrap/dist/css/bootstrap.min.css';

export default class UpdateForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            iname: this.props.post.name, //Initial form filled values
            iemail: this.props.post.email,  //Initial form filled values
            imessage: this.props.post.message,  //Initial form filled values
        }
    }

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({

            [nam]: val,

        });


    }


    handleSubmit = event => {
        event.preventDefault();

        const post = {
            name: this.state.iname,
            email: this.state.iemail,
            message: this.state.imessage,
        };

        console.log(this.props.post.id);

        console.log(this.state.iname);
        console.log(this.state.iemail);
        console.log(this.state.imessage);
        console.log(post);

        axios.put(`http://localhost:8000/api/post/${this.props.post.id}/update/`, post)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Info. Successfully Updated!");
            })
            .catch(error => {
                console.log(error);
            })
    }



    render() {


     

        return (
            <div>
                {/* <Modal trigger={<Button>Update</Button>}>

                    <Modal.Header>Update Details</Modal.Header>
                    <Modal.Description>
                        <Form id='updateform' onSubmit={this.handleSubmit}>
                            <Form.Field >
                                <label>Name</label>
                                <input value={this.state.iname} name='iname' type='text' onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Email:</label>
                                <input value={this.state.iemail} name='iemail' type='email' onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Message:</label>
                                <TextArea value={this.state.imessage} name='imessage' onChange={this.handleChange}></TextArea>
                            </Form.Field>

                            <Button type='submit'>Update</Button>
                        </Form>
                    </Modal.Description>
                </Modal> */}






            </div>
        )
    }
}
