import React, { useRef, useState } from 'react'
import './Register.scss'
import NetflixLogo from '../../media-files/images/netflixlogo.png'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();


    
    const handleStart = () => {
        setEmail(emailRef.current.value);
        emailRef.current.value = ''
    }
    
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
        passwordRef.current.value = ''
    }

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img src={NetflixLogo} alt="" />
                    <button className='login-btn'>Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV</h1>
                <h1>shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {!email ? (
                    <div className="input">
                        <input type="text" placeholder='Email Address' ref={emailRef} />
                        <button className='register-btn' onClick={handleStart}>Get Started <ArrowForwardIosOutlinedIcon /></button>
                    </div>
                ) : (
                <div className="input">
                    <input type="password" placeholder='Password' ref={passwordRef} />
                    <button className='register-btn' onClick={handleFinish}>Start</button>
                </div>
                )}
            </div>
        </div>
    )
}
