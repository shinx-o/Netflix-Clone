import axios from "axios";
import { Router, Routes, Route } from "react-router-dom"
import Home from '../../pages/home/Home'
import { logingFailure, logingStart, loginSuccess, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(logingStart());
    await axios.post('/users/login', user)
        .then(res => {
            if (res.data) {
                return (
                    <Router>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            {dispatch(loginSuccess(res.data))}
                        </Routes>
                    </Router>
                )
            } else {
                let err = { response: { data: 'You are Unauthorized!' } }
                throw err
            }
        })
        .catch(err => {
            dispatch(logingFailure(err.response.data))

        })
}

export const loggingOut = (dispatch) => {
    return dispatch(logout())
}