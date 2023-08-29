import { setGenreSuccess } from "./GenreActions";

export const setGenre = (genre, dispatch) => {
    return dispatch(setGenreSuccess(genre))
}