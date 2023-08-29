import React, {useContext, useState} from 'react'
import './Login.scss'
import NetflixLogo from '../../media-files/images/netflixlogo.png'
import {AuthContext} from '../../context/authContext/AuthContext'
import {login} from '../../context/authContext/apiCalls'
import { Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const { isFetching, dispatch, error } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    }
    return (
        <div className='login'>
            <div className="top">
                <img src={NetflixLogo} alt="" />
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="text" placeholder='Email or phone number' onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                    <button onClick={handleLogin} disabled={isFetching} >Sign In</button>
                    <span className='error'>{error[1].toString()}</span>
                    <span className='signup'>New to Netflix? <Link to='/signup'>Sign up now</Link></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/">Learn more</a></small>
                </form>
            </div>
        </div>
    )
}
