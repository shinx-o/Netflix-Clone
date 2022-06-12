import React, { useState } from 'react'
import './userlist.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../testData'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'

export default function UserList() {

    const [data , setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username',
            headerName: 'User',
            width: 200,
            editable: true,
            renderCell: (params) => {
                return (
                    <div className="username-container">
                        <img src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
            editable: true,
        },
        {
            field: 'transaction',
            headerName: 'Transactions',
            width: 300,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/users/" + params.row.id}>
                            <button className='action-button'>Edit</button>
                        </Link>
                        <DeleteIcon className='delete-button' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className='users'>
            <div className="wrapper">
                <DataGrid
                    autoHeight
                    className='grid'
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick={true}
                />
            </div>
        </div>
    )
}
