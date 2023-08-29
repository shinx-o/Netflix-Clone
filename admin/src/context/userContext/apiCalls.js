import axios from "axios"
import {
    getUsersStart, getUsersSuccess, getUsersFailure,
    deleteUserStart, deleteUserSuccess, deleteUserFailure
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

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart())
    try {
        await axios.delete('/users/' + id, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        })
        dispatch(deleteUserSuccess(id))
    } catch (err) {
        dispatch(deleteUserFailure())
    }
}