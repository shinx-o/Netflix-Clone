import axios from "axios";
import {
    getMoviesFailure, getMoviesStart, getMoviesSuccess,
    deleteMovieFailure, deleteMovieStart, deleteMovieSuccess,
    addMovieFailure, addMovieStart, addMovieSuccess,
    updateMovieFailure, updateMovieStart, updateMovieSuccess
} from "./MovieActions";

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get('/movies', {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        })
        dispatch(getMoviesSuccess(res.data))
    } catch (err) {
        dispatch(getMoviesFailure())
    }
}

export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart())
    try {
        await axios.delete('/movies/find/' + id, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        })
        dispatch(deleteMovieSuccess(id))
    } catch (err) {
        dispatch(deleteMovieFailure())
    }
}

export const addMovie = async (movie, dispatch) => {
    dispatch(addMovieStart())
    try {
        const res = await axios.post('/movies', movie, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        })
        dispatch(addMovieSuccess(res.data.movie))
    } catch (err) {
        dispatch(addMovieFailure())
    }
}

export const updateMovie = async (movie, dispatch) => {
    dispatch(updateMovieStart())
    try {
        const res = await axios.put('/movies/find/' + movie._id, movie, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        })
        dispatch(updateMovieSuccess(res.data))
    } catch (err) {
        dispatch(updateMovieFailure())
    }
}

