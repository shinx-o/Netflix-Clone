import axios from "axios"
import {
    getUsersStart, getUsersSuccess, getUsersFailure,
    deleteUserStart, deleteUserSuccess, deleteUserFailure, postUserStart, postUserSuccess, postUserFailure
} from "./UserActions"

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart())
    try {
        const res = await axios.get('/users', {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        })
        dispatch(getUsersSuccess(res.data))
    } catch (err) {
        dispatch(getUsersFailure())
    }
}

export const postUser = async (user, dispatch) => {
    dispatch(postUserStart())
    try {
        const res = await axios.post('/users/signup', user)
        dispatch(postUserSuccess(res.data))
    }
    catch(err) {
        dispatch(postUserFailure(error))
    }
}