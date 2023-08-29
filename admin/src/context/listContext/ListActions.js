export const getListsStart = () => ({
    type: "GET_LISTS_START",
})

export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists
})

export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
})

export const deleteListStart = () => ({
    type: "DELETE_LIST_START",
})

export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id
})

export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE",
})

export const addListsStart = () => ({
    type: "ADD_LISTS_START",
})

export const addListsSuccess = (list) => ({
    type: "ADD_LISTS_SUCCESS",
    payload: list
})

export const addListsFailure = () => ({
    type: "ADD_LISTS_FAILURE",
})

export const updateListStart = () => ({
    type: "UPDATE_LIST_START",
})

export const updateListSuccess = (movie) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: movie
})

export const updateListFailure = () => ({
    type: "UPDATE_LIST_FAILURE",
})

