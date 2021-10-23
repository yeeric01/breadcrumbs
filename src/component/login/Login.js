import React, { Component } from 'react';
import {useState} from "react";
import logo from'../../assets/logo.png';
import './Login.css'
import {auth} from '../../firebase-config'
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const loginUser = async ()=>{
        
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            history.push("/home");
            
        }catch(error){
            console.log(error.message);
        }
    };
    return (
        <div className="loginContainer">
            <img className="loginLogo" src={logo}></img>
            <h1 className="loginHeader">Bread Crumbs</h1>
            <input className="loginUserText" placeholder="Username" onChange={(event)=>{setLoginEmail(event.target.value)}}></input>
            <input className="loginPassText" type="password" placeholder="Password" onChange={(event)=>{setLoginPassword(event.target.value)}}></input>
            <button className="loginButton" onClick={loginUser}>Log In</button>
            <a className="loginSignup" href="google.com">Sign Up</a>
        </div>
        
    )
}

export default Login;
