import React, { useContext, useEffect } from 'react'
import './userlist.scss'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext/UserContext';
import { AuthContext } from '../../context/authContext/AuthContext';
import { getUsers , deleteUser } from '../../context/userContext/apiCalls'

export default function UserList() {
    const {users, dispatch} = useContext(UserContext);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        getUsers(dispatch);
    },[dispatch])

    const handleDelete = (id) => {
        deleteUser(id, dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'email',
            headerName: 'Username',
            width: 300,
            editable: false,
            renderCell: (params) => {
                return (
                    <div className="username-container">
                        <img src={params.row.profilePic ? params.row.profilePic : 'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'} alt="Not Found" />
                        {params.row.email}
                    </div>
                )
            }
        },
        {
            field: 'firstname',
            headerName: 'First Name',
            width: 100,
            editable: false,
            renderCell: (params) => {
                return (
                    <div className="rendered-cell" style={{width : '80%' , textAlign : 'center'}}>
                        {params.row.firstname}
                    </div>
                )
            }
        },
        {
            field: 'lastname',
            headerName: 'Last Name',
            width: 100,
            editable: false,
            renderCell: (params) => {
                return (
                    <div className="rendered-cell" style={{width : '80%' , textAlign : 'center'}}>
                        {params.row.lastname}
                    </div>
                )
            }
        },
        {
            field: 'admin',
            headerName: 'Is Admin',
            width: 100,
            editable: false,
            renderCell: (params) => {
                return (
                    <div className="admin" style={{width : '80%' , textAlign : 'center'}}>
                        {params.row.admin ? "Yes" : "No"}
                    </div>
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link className='link' to={"/users/" + params.row._id} state={{user : params.row}} >
                            <button style={params.row._id === user._id ? {display : 'inline'} : {display : 'none'}} className='action-button'>Edit</button>
                        </Link>
                        <DeleteIcon style={params.row._id === user._id ? {display : 'inline'} : {display : 'none'}} className='delete-button' onClick={() => handleDelete(params.row._id)} />
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
                    rows={users}
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
