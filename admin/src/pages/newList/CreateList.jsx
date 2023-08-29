import React, { useContext, useState } from 'react'
import './createList.scss'
import { ListContext } from '../../context/listContext/ListContext'
import { MovieContext } from '../../context/moviesContext/MovieContext'
import { addList } from '../../context/listContext/apiCalls';
import { useEffect } from 'react';
import { getMovies } from '../../context/moviesContext/apiCalls';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function CreateList() {
    const [list, setList] = useState({});
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
    const { dispatch } = useContext(ListContext);
    const [values, setValues] = useState([]);

    const ITEM_HEIGHT = 50;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                backgroundColor: '#1A1A1A',
                color: 'white',
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie])

    const handleSubmit = (e) => {
        e.preventDefault()
        addList(list, dispatch);
        setList({})
    }

    const handleChange = (e) => {
        setList({ ...list, [e.target.name]: e.target.value })
    }

    const handleSelected = (event) => {
        const { target: { value } } = event;
        values.length < 10 && setValues(typeof value === 'string' ? value.split(',') : value);
        setList({ ...list, [event.target.name]: values })
    }


    return (
        <div className='new-product'>
            <div className="movie-title-container">
                <h1>Create List</h1>
                <button onClick={handleSubmit}>Create</button>
            </div>
            <div className="create-product-container">
                <form id='movie-form'>
                    <div className="new-product-item">
                        <label>Title</label>
                        <input type="text" placeholder='Title' name='title' onChange={handleChange} />
                    </div>
                    <div className="new-product-item">
                        <label>Genre</label>
                        <input type="text" placeholder='Genre' name='genre' onChange={handleChange} />
                    </div>
                    <div className="new-product-item">
                        <label>Type</label>
                        <select name="type" id="type" onChange={handleChange}>
                            <option >Select</option>
                            <option value="series">Series</option>
                            <option value="movie">Movies</option>
                        </select>
                    </div>
                    <div className="new-product-item">
                        <InputLabel id="demo-multiple-name-label" sx={{ color: 'white' }}>Movies</InputLabel>
                        <Select
                            className='selector'
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            value={values}
                            onChange={handleSelected}
                            name='content'
                            MenuProps={MenuProps}
                        >
                            {movies.map((movie, id) => (
                                <MenuItem  key={id} value={movie._id} > {movie.title} </MenuItem>
                            ))}
                        </Select>
                    </div>
                </form>
            </div>
        </div>
    )
}
