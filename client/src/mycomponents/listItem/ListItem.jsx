import React, { useEffect, useRef, useState } from 'react'
import './ListItem.scss'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function ListItem({ item, index }) {

    const listRef = useRef();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await axios.get(`movies/find/${item}`, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWNiMGI0NjU5YWYxYmVjMzY0MzIwYiIsImlhdCI6MTY1NDgwMTcwMiwiZXhwIjoxNjU1MjMzNzAyfQ.LnbLkoxvVtuHvsh0LwOyY55j4xxihJLDnBOElsGJ-Vw"
                    },
                })
                setMovie(res.data)
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchItem();
    }, [item])


    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={{pathname: '/watch'}} state={movie}>
            <div
                ref={listRef}
                className='list-item'
                style={{ left: isHovered && index * 289 - 20 + index * 10 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <img src={movie.image} alt="" />
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop muted></video>
                        <div className="item-info">
                            <div className="icons">
                                <PlayCircleIcon className='icon' />
                                <AddCircleOutlineIcon className='icon' />
                                <ThumbUpOutlinedIcon className='icon' />
                                <ThumbDownOutlinedIcon className='icon' />
                            </div>
                            <div className="item-info-container">
                                <span>New</span>
                                <span className='limit'>{movie.rating}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="genre">
                                {movie.genre}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    )
}
