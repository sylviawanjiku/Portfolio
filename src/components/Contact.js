import React, { Component } from 'react';
import '../assets/scss/contact.scss'

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            comment: ''
        }
    }

    handleChange =(e)=>{
        this.setState({
           [ e.target.name]: e.target.value
        })

    }
    handleSubmit = (e)=> {
        e.preventDefault();
        console.log("nnnnnn")
        // const newMail = {
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     email: this.state.email,
        //     comment: this.state.comment
        // }
        // console.log("Mail:",newMail)
    }
   
    render() {
        
        return (
            <div className="container">
                <div className="title center">
                    <h1> Contact Me</h1>
                </div>
                <div className="next"><a  href="/#/" > <i className="material-icons large">chevron_right</i></a></div>
                <div className="back"><a  href="/#/work" > <i className="material-icons large">chevron_left</i></a></div>
                <form>
                    <div className="form-det">
                        <span>First name:</span><br />
                        <input type="text" name="firstName" onChange={this.handleChange}></input><br />
                    </div>
                    <div className="form-det">
                        <span>Last name:</span><br />
                        <input type="text" name="lastName" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-det">
                        <span>Email address:</span><br />
                        <input type="email" name="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-det">
                        <span>Comments/ Questions</span><br />
                        <textarea name="comment" className="message" onChange={this.handleChange}></textarea>
                    </div>
                </form>
                <button className="submit" onSubmit = {this.handleSubmit}>
                    Send Message
                </button>

            </div>
        )
    }
}
export default Contact;