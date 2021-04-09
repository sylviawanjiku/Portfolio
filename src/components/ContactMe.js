import React, { Component } from 'react';
import '../assets/scss/contact.scss';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { status } = this.state;
        return (
            <div className="container">
                <div className="title center">
                    <h1> Contact Me</h1>
                </div>
                <div className="next"><a href="/#/" > <i className="material-icons large">chevron_right</i></a></div>
                <div className="back"><a href="/#/work" > <i className="material-icons large">chevron_left</i></a></div>
                <form onSubmit={this.handleSubmit}
                    action="https://formspree.io/xayoglwa"
                    method="POST">

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
                    <input type="text" name="message" />
                        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                     </form>

                <div className="contact-details">
                    <ul className="center">
                        <li>Mobile Number : +254701670446</li>
                        <li>Email: sylvia.mbugua12@gmail.com</li>
                        <li>LinkedIn:<a href="https://www.linkedin.com/in/sylvia-mbugua">Sylvia Mbugua</a></li>
                    </ul>
                </div>


            </div>
        )
    }

    handleSubmit(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
    }
}
export default Contact;