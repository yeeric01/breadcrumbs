import React, { Component } from 'react';
import logo from'../../assets/logo.png';
import './Login.css'

export class Login extends Component {
    loginUser(){

    }
    render() {
        return (
            <div className="loginContainer">
                <img className="loginLogo" src={logo}></img>
                <h1 className="loginHeader">Bread Crumbs</h1>
                <input className="loginUserText" placeholder="Username"></input>
                <input className="loginPassText" placeholder="Password"></input>
                <button className="loginButton" onClick={this.loginUser}>Log In</button>
                <a className="loginSignup" href="google.com">Sign Up</a>
            </div>
            
        )
    }
}

export default Login
