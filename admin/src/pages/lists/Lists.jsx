import React, { useContext, useEffect } from 'react'
import './lists.scss'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import { ListContext } from '../../context/listContext/ListContext';
import { getLists, deleteList } from '../../context/listContext/apiCalls';

export default function Lists() {
    const {lists, dispatch} = useContext(ListContext);


    useEffect(() => {
        getLists(dispatch)

    
    },[dispatch])

    const handleDelete = (id) => {
        deleteList(id ,dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
            field: 'type',
            headerName: 'Type',
            width: 80,
            editable: false,
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 80,
            editable: false,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/lists/" + params.row._id} state={{list : params.row}}>
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
                    rows={lists}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick={true}
                    getRowId={r => r && r._id}
                />
            </div>
        </div>
    )
}
