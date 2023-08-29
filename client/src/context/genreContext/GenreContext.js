import GenreReducer from './GenreReducer'
import { createContext , useReducer} from 'react'

const INITIAL_STATE = {
    genre: null
}

export const GenreContext = createContext(INITIAL_STATE);

export const GenreContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(GenreReducer, INITIAL_STATE);

    return (
        <GenreContext.Provider
        value={{
            genre: state.genre,
            dispatch,
        }}>
            {children}
        </GenreContext.Provider>
    )

}

