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
                window.location.reload(false);
                alert("Info. Successfully Updated!");
            })
            .catch(error => {
                console.log(error);
                alert("Sorry we couldn't proceed your request at this time. Please try again later..");
            })
    }


    render() {

        function openModal(id) {
            var x = document.getElementById(`${id}`);
            x.classList.add("is-active");
            document.getElementById(`${id}`).style.display = "";
        }


        function closeModal(id) {
            document.getElementById(`${id}`).style.display = 'none';
            document.getElementById(`${id}`).classList.remove("is-active");
        }


        return (
            <div>
                <div className="edit-button">
                    <button className="button is-info is-light" title="Edit details" onClick={() => openModal(this.props.post.id)} style={{ float: "right", }}>Edit</button>
                </div>

                <div id={this.props.post.id} className="modal">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <form onSubmit={this.handleSubmit}>
                            <header className="modal-card-head">
                                <p className="modal-card-title">Editing Details of User: {this.props.post.id} </p>
                                <p className="delete" aria-label="close" onClick={() => closeModal(this.props.post.id)}></p>
                            </header>
                            <section className="modal-card-body">

                                <div className="field">
                                    <label className="label is-small paddingt-20">Name:</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input is-small" value={this.state.iname} name="iname" type="text" placeholder="name" onChange={this.handleChange} />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </div>

                                    <label className="label is-small paddingt-20">Email:</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input is-small" value={this.state.iemail} name="iemail" type="email" placeholder="makodepurvesh@gmail.com" onChange={this.handleChange} />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-at"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </div>

                                    <label className="label is-small paddingt-20">Message:</label>
                                    <textarea className="textarea" value={this.state.imessage} name="imessage" placeholder="e.g. Hello world" onChange={this.handleChange}></textarea>
                                </div>

                            </section>
                            <footer className="modal-card-foot">
                                <button className="button is-success" type="submit" onClick={() => closeModal(this.props.post.id)}>Save changes</button>
                            </footer>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
