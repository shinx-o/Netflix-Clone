import React, { useState } from 'react'
import './NavBar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NetflixLogo from '../../media-files/images/netflixlogo.png'
import pfp from '../../media-files/images/anime1.jpg'

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }


  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src={NetflixLogo} alt="" />
                <span>Home</span>
                <span>TV Shows</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <SearchIcon className='icon' />
                <span>children</span>
                <NotificationsIcon className='icon' />
                <img src={pfp} alt="" />
                <div className="profile">
                    <ArrowDropDownIcon className='icon'/>
                    <div className="options">
                        <span>Account</span>
                        <span>Sign Out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar