import React, { useContext, useEffect } from 'react'
import './productList.scss'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import { MovieContext } from '../../context/moviesContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/moviesContext/apiCalls';

export default function ProductList() {
    const {movies, dispatch} = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch)
    },[dispatch])

    const handleDelete = (id) => {
        deleteMovie(id ,dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
            field: 'movie',
            headerName: 'Movie',
            width: 280,
            editable: false,
            renderCell: (params) => {
                return (
                    <div className="username-container">
                        <img src={params.row.image} alt="" />
                        {params.row.title}
                    </div>
                ) 
            }
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 120,
            editable: false,
        },
        {
            field: 'year',
            headerName: 'Year',
            width: 100,
            editable: false,
        },
        {
            field: 'rating',
            headerName: 'Rating',
            width: 100,
            editable: false,
        },
        {
            field: 'isSeries',
            headerName: 'isSeries',
            width: 100,
            editable: false,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/movies/" + params.row._id} state={{movie : params.row}}>
                            <button className='action-button'>Edit</button>
                        </Link>
                        <DeleteIcon className='delete-button' onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className='product-list'>
            <div className="wrapper">
                <DataGrid
                    autoHeight
                    className='grid'
                    rows={movies}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick={true}
                    getRowId={r => r._id}
                />
            </div>
        </div>
    )
}
