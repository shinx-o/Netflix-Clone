export const logingStart = () => ({
    type: "LOGIN_START",
})

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const logingFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error

})

export const logout = () => ({
    type: "LOGOUT",
})