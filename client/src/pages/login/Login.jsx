import React from 'react'
import './Login.scss'
import NetflixLogo from '../../media-files/images/netflixlogo.png'

export default function Login() {
    return (
        <div className='login'>
            <div className="top">
                <img src={NetflixLogo} alt="" />
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="text" placeholder='Email or phone number' />
                    <input type="password" placeholder='Password' />
                    <button>Sign In</button>
                    <span className='signup'>New to Netflix? <a href='/'>Sign up now</a></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/">Learn more</a></small>
                </form>
            </div>
        </div>
    )
}
