import React, { Component } from 'react';
import helper from '../config/axios'

class IndexLogin extends Component {

  routeToLogin(event){
    console.log(event.target.id)
    helper.authenticate(event.target.id);
  }

  render() {

    return (
      <div >

          <div className="text-center">
              <h1><span className="fa fa-lock"></span> Authentication</h1>

              <p>Login or Register with:</p>

              <a onClick={this.routeToLogin} id="local" className="login-local login-btn btn btn-default"><span className="fa fa-user"></span>Login with email</a>
              <a onClick={this.routeToLogin} id="signup" className="login-local login-btn btn btn-default"><span className="fa fa-user"></span>Signup</a>
              <a onClick={this.routeToLogin} id="facebook" className="login-btn btn btn-primary"><span className="fa fa-facebook"></span>Login with Facebook</a>
              <a onClick={this.routeToLogin} id="twitter" className="login-btn btn btn-info"><span className="fa fa-twitter"></span>Login with Twitter</a>
              <a href="/auth/google" id="google" className="login-btn btn btn-danger"><span className="fa fa-google-plus"></span>Login with Google</a>

          </div>

      </div>

    )
  }
}

export default IndexLogin;
