import React, { Component } from "react";
import axios from 'axios';

export default class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            iname: '',
            iemail: '',
            imessage: '',
        }
    }

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            //    iname: event.target.value,
            //    iemail: event.target.value,
            //    imessage: event.target.value,
            [nam]: val
        });
    }


    handleSubmit = event => {
        event.preventDefault();

        const post = {
            name: this.state.iname,
            email: this.state.iemail,
            message: this.state.imessage,
        };

        console.log(this.state.iname);
        console.log(this.state.iemail);
        console.log(this.state.imessage);
        console.log(post);

        axios.post(`http://localhost:8000/api/post/create/`, post)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload(false);
                alert("Info Successfully added!")
            })
            .catch(error => {
                console.log(error);
                alert("Sorry we couldn't proceed your request at this time. Make sure you fill all the fields and try again..");
            })
    }


    render() {
        return (
            <div className="post">
                <p style={{ fontSize: '30px', color: 'blue' }}>Add details:</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label paddingt-20">Name:</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" name="iname" type="text" placeholder="name" onChange={this.handleChange} />
                            <span className="icon is-left">
                                <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </div>

                        <label className="label paddingt-20">Email:</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" name="iemail" type="email" placeholder="makodepurvesh@gmail.com" onChange={this.handleChange} />
                            <span className="icon is-left">
                                <i className="fas fa-at"></i>
                            </span>
                            <span className="icon is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </div>

                        <label className="label paddingt-20">Message:</label>
                        <textarea className="textarea" name="imessage" placeholder="e.g. Hello world" onChange={this.handleChange}></textarea>

                        <div className="control paddingt-20">
                            <button className="button is-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}



