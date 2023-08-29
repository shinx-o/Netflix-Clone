import axios from "axios";
import {
    addListsStart, addListsSuccess, addListsFailure,
    getListsStart, getListsSuccess, getListsFailure,
    deleteListStart, deleteListSuccess, deleteListFailure,
    updateListStart, updateListSuccess, updateListFailure
} from './ListActions'

export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try {
        const res = await axios.get('/lists', {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        })
        dispatch(getListsSuccess(res.data))
    } catch (err) {
        dispatch(getListsFailure())
    }
}

export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart())
    try {
        await axios.delete('/lists/' + id, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        })
        dispatch(deleteListSuccess(id))
    } catch (err) {
        dispatch(deleteListFailure())
    }
}

export const addList = async (list, dispatch) => {
    dispatch(addListsStart())
    try {
        const res = await axios.post('/lists', list, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        })
        dispatch(addListsSuccess(res.data))
    } catch (err) {
        dispatch(addListsFailure())
    }
}

export const updateList = async (list, dispatch) => {
    dispatch(updateListStart())
    try {
        const res = await axios.put('/lists/' + list._id, list, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        })
        dispatch(updateListSuccess(res.data))
    } catch (err) {
        dispatch(updateListFailure())
    }
}

