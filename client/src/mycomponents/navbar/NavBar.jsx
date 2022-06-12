import React, { useState } from 'react'
import './NavBar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NetflixLogo from '../../media-files/images/netflixlogo.png'
import pfp from '../../media-files/images/anime1.jpg'
import { Link } from 'react-router-dom';

const NavBar = ({ type }) => {

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
                    <Link to="/browse" className='link'>
                        <span>Home</span>
                    </Link>
                    <Link to="/series" className='link'>
                        <span>TV Shows</span>
                    </Link>
                    <Link to="/movies" className='link'>
                        <span>Movies</span>
                    </Link>
                    <span>New & Popular</span>
                    <span>My List</span>
                    {type &&
                        <select name="genre" id="genre">
                            <option value="none" defaultValue={true}>Genre</option>
                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="animation">Animation</option>
                            <option value="bollywood">Bollywoord</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="k dramas">K Dramas</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-Fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="us movies">US Movies</option>
                        </select>
                    }
                </div>
                <div className="right">
                    <SearchIcon className='icon' />
                    <span>children</span>
                    <NotificationsIcon className='icon' />
                    <img src={pfp} alt="" />
                    <div className="profile">
                        <ArrowDropDownIcon className='icon' />
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