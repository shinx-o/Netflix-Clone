import React, { useState } from 'react'
import './Register.scss'
import NetflixLogo from '../../media-files/images/netflixlogo.png'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Login from '../login/Login';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext/UserContext';

export default function Register() {
    const {users, dispatch} = useContext(UserContext);
    const [password, setPassword] = useState('')
    const [style, setStyle] = useState({});


    const handleChange = (e) => {
        setNewUser({...users, [e.target.name] : e.target.value})
    }

    const handleMail = (e) => {
        setStyle({
            transform : 'translateX(0vw)'
        })
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img src={NetflixLogo} alt="" />
                    <Link to='/login' element={<Login />}>
                        <button className='login-btn'>Sign In</button>
                    </Link>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV</h1>
                <h1>shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input">
                    <input type="text" name='email' placeholder='Email Address' onChange={(e) => handleChange(e)} />
                    <button className='register-btn' onClick={handleMail}>Get Started <ArrowForwardIosOutlinedIcon /></button>
                </div>
            </div>
            <div className="password" style={style}>
                <div className="input">
                    <input type="password" placeholder='Password' onChange={(e) => handlePassword(e)} />
                    <button className='register-btn' onClick={handlePassword}>Create</button>
                </div>
                <div className="wrapper-pfp-container">
                    <img src="https://images.pexels.com/photos/10970424/pexels-photo-10970424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>Upload</button>
                    <div className="progress"> </div>
                </div>
            </div>
        </div>
    )
}
