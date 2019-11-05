import React from 'react';
import '../../assets/css/signup.scss';

class Signup extends React.Component {
  render() {
    return (
      <div className="signup-container">
       
        <form className="center-align col s12">
          <div>
            <h5 className="sign-up-text">Sign Up</h5>
          </div>

          <div className="row center-align">
            <div className="input-field col s10">
              <label htmlFor="email">Email</label>
              <input id="icon_prefix" type="email" name="email" />
            </div>
          </div>

          <div className="row center-align">
            <div className="input-field col s10">
              <label htmlFor="username">Username</label>
              <input id="icon_prefix" type="text" name="username" />
            </div>
          </div>

          <div className="row center-align">
            <div className="input-field col s10 ">
              <label htmlFor="password">Password</label>
              <input id="icon_prefix" type="password" name="password" />
            </div>
          </div>
          <div>
            
          <a href="/"><button type="submit" className="btn" id="btn-register" > 
              Register  
            </button>
            </a>
          </div>
          <p id="already-member">
            Already have an account? <a href="/"> Sign In</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Signup;
