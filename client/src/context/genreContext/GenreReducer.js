const GenreReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GENRE_SUCCESS':
            return {
                genre: action.payload
            }
        default:
            return state
    }
}

export default GenreReducer;