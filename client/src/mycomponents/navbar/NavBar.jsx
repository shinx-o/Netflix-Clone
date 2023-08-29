import React, { useContext, useState } from 'react'
import './NavBar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NetflixLogo from '../../media-files/images/netflixlogo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/AuthContext';
import { GenreContext } from '../../context/genreContext/GenreContext';
import { loggingOut } from '../../context/authContext/apiCalls';
import { useNavigate } from 'react-router-dom';
import { setGenre } from '../../context/genreContext/apiCalls';

const NavBar = ({ type }) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch, user } = useContext(AuthContext);
    const { dispatch: genreDispatch } = useContext(GenreContext);

    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        navigate('/')
        loggingOut(dispatch);
    }

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

    const handleGenre = (e) => {
        setGenre(e.target.value === 'null' ? undefined : e.target.value , genreDispatch);
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
                        <select name="genre" id="genre" onChange={(e) => handleGenre(e)}>
                            <option value="null" defaultValue={true}>Genre</option>
                            <option value="null">Random</option>
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
                    <img src={user && user.profilePic} alt="" />
                    <div className="profile">
                        <ArrowDropDownIcon className='icon' />
                        <div className="options">
                            <span>Account</span>
                            <span onClick={e => handleLogOut(e)}>Sign Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar