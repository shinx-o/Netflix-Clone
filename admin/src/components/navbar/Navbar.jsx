import React from 'react'
import './navbar.scss'
import NetflixLogo from '../../media-files/images/netflixlogo.png'
import anime6 from '../../media-files/images/anime6.jpg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <img src={NetflixLogo} alt="" />
                </div>
                <div className="right">
                    <div className="notif container">
                        <NotificationsIcon />
                            <span>25</span>
                    </div>
                    <div className="notif container">
                        <LanguageIcon />
                            <span>14</span>
                    </div>
                    <div className="notif container">
                        <SettingsIcon />
                    </div>
                    <img src={anime6} alt="" />
                </div>
            </div>

        </div>
    )
}
