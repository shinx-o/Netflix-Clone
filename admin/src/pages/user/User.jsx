import React from 'react'
import './user.scss'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {Link, useLocation} from 'react-router-dom'
import { useState } from 'react';


export default function User() {
    const editUser = useLocation().state.user
    const [pfp , setPfp] = useState(null);

    return (
        <div className='user'>
            <div className="user-title-container">
                <h1>Edit User Information</h1>
                <Link to='/newUser'>
                    <button className="user-btn">create</button>
                </Link>
            </div>
            <div className="user-information-container">
                <div className="user-information">
                    <div className="user-info-top">
                        <img src={editUser.profilePic ? editUser.profilePic : 'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'} alt="" />
                        <div className="user-info-details">
                            <span className="user-name">{editUser.firstname + ' ' + editUser.lastname}</span>
                            <span className="user-jobtitle">Student</span>
                        </div>
                    </div>
                    <div className="user-info-bottom">
                        <div className="user-info-bottom-details">
                            <span>ID: {editUser._id}</span>
                        </div>
                        <div className="user-info-bottom-details">
                            <span>Username: {editUser.email}</span>
                        </div>
                        <div className="user-info-bottom-details">
                            <span>First Name: {editUser.firstname}</span>
                        </div>
                        <div className="user-info-bottom-details">
                            <span>Last Name: {editUser.lastname}</span>
                        </div>
                        <div className="user-info-bottom-details">
                            <span>isAdmin: {editUser.admin ? "Yes" : "No"}</span>
                        </div>
                    </div>
                </div>
                <div className="user-update">
                    <h2 className="user-update-title">Edit</h2>
                    <form className="user-update-form">
                        <div className="user-update-left">
                            <div className="user-update-items">
                                <label>Username</label>
                                <input type="text" className='user-update-input' placeholder='username' />
                            </div>
                            <div className="user-update-items">
                                <label>First Name</label>
                                <input type="text" placeholder='first name' />
                            </div>
                            <div className="user-update-items">
                                <label>Last Name</label>
                                <input type="text" placeholder='last name' />
                            </div>
                        </div>
                        <div className="user-update-right">
                            <div className="user-update-img">
                                <img src={pfp ? URL.createObjectURL(pfp) : editUser.profilePic ? editUser.profilePic : "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"} alt="" />
                                <label htmlFor="profilePic"><FileUploadIcon className="user-img-upload" /></label>
                                <input type="file" id='profilePic' name='profilePic' style={{ display: 'none' }} onChange={e => setPfp(e.target.files[0])}/>
                            </div>
                            <button className="user-update-btn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
