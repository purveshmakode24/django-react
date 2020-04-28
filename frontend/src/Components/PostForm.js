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

        axios.post(`http://localhost:8000/api/post/create/`,  post  )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
        return (

            <div>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field" bis_skin_checked="1">
                        <label>First Name</label>
                        <input type="text" name="iname" placeholder="First Name" onChange={this.handleChange} />
                    </div>
                    <div className="field" bis_skin_checked="1">
                        <label>E-mail</label>
                        <input type="email" name="iemail" placeholder="joe@schmoe.com" onChange={this.handleChange} />
                    </div>
                    <div className="field" bis_skin_checked="1">
                        <label>Text</label>
                        <textarea name="imessage" onChange={this.handleChange} ></textarea>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )

    }

}



