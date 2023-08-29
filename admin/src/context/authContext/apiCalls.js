import axios from "axios";
import { Router, Routes, Route } from "react-router-dom"
import Login from "../../pages/login/Login"
import { logingFailure, logingStart, loginSuccess, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(logingStart());
    await axios.post('/users/login', user)
        .then(res => {
            if(res.data.admin) { 
                dispatch(loginSuccess(res.data))
            }else {
                let err = {response : {data : 'You are Unauthorized!'}}
                throw err
            }
        })
        .catch(err => {
            dispatch(logingFailure(err.response.data))

        })
}

export const loggingOut = (dispatch) => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                {dispatch(logout())}
            </Routes>
        </Router>
    )
}