import React, { useContext, useState } from 'react'
import './editList.scss'
import { Link, useLocation } from 'react-router-dom'
import { ListContext } from '../../context/listContext/ListContext';
import { updateList } from '../../context/listContext/apiCalls';
import { MovieContext } from '../../context/moviesContext/MovieContext';
import { useEffect } from 'react';
import { getMovies } from '../../context/moviesContext/apiCalls';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';



export default function EditList() {
    const editingList = useLocation().state.list
    const [list, setList] = useState({});
    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
    const [values, setValues] = useState([]);
    const [style, setStyle] = useState({});

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
        if (list.content.length !== 9) {
            setStyle({
                color: 'red',
                display: 'inline'
            })
        } else {
            setStyle({ display: 'none' })
            updateList({ ...list, _id: editingList._id }, dispatch);
        }
    }

    const handleChange = (e) => {
        setList({ ...list, [e.target.name]: e.target.value })
    }

    const getMovieNames = () => {
        return movies.filter(movie => {
            if (editingList.content.includes(movie._id)) return true;
            return false;
        })
    }

    const handleSelected = (event) => {
        const { target: { value } } = event;
        setValues(typeof value === 'string' ? value.split(',') : value)
        setList({ ...list, [event.target.name]: values })

    }

    return (
        <div className='product'>
            <div className="product-title-container">
                <h1>Edit List</h1>
                <div className="right">
                    <button className="product-update-btn" onClick={handleSubmit} >Update</button>
                    <Link to='/new-List'>
                        <button className="product-btn">Create</button>
                    </Link>
                </div>
            </div>
            <div className="product-container">
                <div className="product-details">
                    <div className="product-info-items">
                        <span className="titles">ID: </span>
                        <span className="values">{editingList._id}</span>
                    </div>
                    <div className="product-info-items">
                        <span className="titles">Title: </span>
                        <span className="values">{editingList.title}</span>
                    </div>
                    <div className="product-info-items">
                        <span className="titles">Type: </span>
                        <span className="values">{editingList.type}</span>
                    </div>
                    <div className="product-info-items">
                        <span className="titles">Genre: </span>
                        <span className="values">{editingList.genre}</span>
                    </div>
                    <div className="product-info-items">
                        <span className="titles">Movies: </span>
                        <span className="values">
                            <select multiple>
                                {getMovieNames().map(item => {
                                    return (<option disabled key={item._id}>{item.title}</option>)
                                })}
                            </select>
                        </span>
                    </div>
                </div>
                <div className="product-update">
                    <div className="product-update-fields">
                        <label>Title</label>
                        <input type="text" name='title' placeholder='Title' onChange={handleChange} />
                    </div>
                    <div className="product-update-fields">
                        <label>Genre</label>
                        <input type="text" name='genre' placeholder='Genre' onChange={handleChange} />
                    </div>
                    <div className="product-update-fields">
                        <label>Type</label>
                        <select name="type" id="type" onChange={handleChange}>
                            <option >Select</option>
                            <option value="series">Series</option>
                            <option value="movie">Movies</option>
                        </select>
                    </div>
                    <div className="product-update-fields">
                        <InputLabel id="demo-multiple-name-label" sx={{ color: 'white' }}>Movies <span className='required' style={style}>Please Select Only 10 movies!</span></InputLabel>
                        <div className="select-wrapper">
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
                                    <MenuItem key={id} value={movie._id} > {movie.title} </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
