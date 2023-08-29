import React, { useContext } from 'react'
import './navbar.scss'
import NetflixLogo from '../../media-files/images/netflixlogo.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../context/authContext/AuthContext';
import {loggingOut} from '../../context/authContext/apiCalls';


export default function Navbar({ style }) {
    const { dispatch, user } = useContext(AuthContext);
    const handleLogOut = (e) => {
        e.preventDefault();
        loggingOut(dispatch);
    }

    return (
        <div className='navbar' style={style}>
            <div className="wrapper">
                <div className="left">
                    <img src={NetflixLogo} alt="" />
                </div>
                <div className="right">
                    <div className="notif container">
                        <NotificationsIcon />
                        <span className='badges'>25</span>
                    </div>
                    <div className="notif container">
                        <LanguageIcon />
                        <span className='badges'>14</span>
                    </div>
                    <div className="notif container">
                        <SettingsIcon />
                    </div>
                    <img src={user && user.profilePic} alt="" />
                    <button className="logout-btn" onClick={e => handleLogOut(e)}>
                        <LogoutIcon className='logout' />
                    </button>
                </div>
            </div>

        </div>
    )
}
