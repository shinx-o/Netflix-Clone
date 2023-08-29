export const getUsersStart = () => ({
    type: "GET_USERS_START",
})

export const getUsersSuccess = (users) => ({
    type: "GET_USERS_SUCCESS",
    payload: users
})

export const getUsersFailure = () => ({
    type: "GET_USERS_FAILURE",
})

export const postUserStart = () => ({
    type: "POST_USER_START",
})

export const postUserSuccess = (user) => ({
    type: "POST_USER_SUCCESS",
    payload: users
})

export const postUserFailure = () => ({
    type: "POST_USER_FAILURE",
})
