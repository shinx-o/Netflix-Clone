import React, { useContext, useState } from 'react'
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './Login.scss'

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
            <form action="">
                <h1>Sign In</h1>
                <input type="text" placeholder='Email or phone number' onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <span className='error'>{error[1].toString()}</span>
                <button onClick={handleLogin} disabled={isFetching} >Sign In</button>
                <span className='ghost-element'></span>
            </form>
        </div>
    )
}
