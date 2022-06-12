import React from 'react'
import './user.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {Link} from 'react-router-dom'

export default function User() {



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
                        <img src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="user-info-details">
                            <span className="user-name">Ethan Hunt</span>
                            <span className="user-jobtitle">Student</span>
                        </div>
                    </div>
                    <div className="user-info-bottom">
                        <span className="user-info-bottom-title">Account Details</span>
                        <div className="user-info-bottom-details">
                            <AccountCircleIcon className='user-info-icons' />
                            <span>shinx17kowl</span>
                        </div>
                        <div className="user-info-bottom-details">
                            <CalendarMonthOutlinedIcon className='user-info-icons' />
                            <span>17 Jun 2001</span>
                        </div>
                        <span className="user-info-bottom-title">Contact Details</span>
                        <div className="user-info-bottom-details">
                            <PhoneAndroidIcon className='user-info-icons' />
                            <span>89392923254</span>
                        </div>
                        <div className="user-info-bottom-details">
                            <EmailIcon className='user-info-icons' />
                            <span>shinx@email.com</span>
                        </div>
                        <div className="user-info-bottom-details">
                            <LocationOnIcon className='user-info-icons' />
                            <span>Bhopal, India</span>
                        </div>
                    </div>
                </div>
                <div className="user-update">
                    <h2 className="user-update-title">Edit</h2>
                    <form className="user-update-form">
                        <div className="user-update-left">
                            <div className="user-update-items">
                                <label>Username</label>
                                <input type="text" className='user-update-input' placeholder='shinx17' />
                            </div>
                            <div className="user-update-items">
                                <label>Full Name</label>
                                <input type="text" placeholder='Ethan Hunt' />
                            </div>
                            <div className="user-update-items">
                                <label>Email</label>
                                <input type="text" placeholder='shinx@email.com' />
                            </div>
                            <div className="user-update-items">
                                <label>Phone</label>
                                <input type="text" placeholder='8939293254' />
                            </div>
                            <div className="user-update-items">
                                <label>Address</label>
                                <input type="text" placeholder='Bhopal, India' />
                            </div>
                        </div>
                        <div className="user-update-right">
                            <div className="user-update-img">
                                <img src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <label htmlFor="file"><FileUploadIcon className="user-img-upload" /></label>
                                <input type="file" id='file' style={{ display: 'none' }} />
                            </div>
                            <button className="user-update-btn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
