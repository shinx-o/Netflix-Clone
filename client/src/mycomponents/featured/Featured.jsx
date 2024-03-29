import React, { useEffect, useState } from 'react'
import './Featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Featured({ type }) {

    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                let res;
                if (type) {
                    res = await axios.get('movies/random?type=' + type, {
                        headers: {
                            Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken
                        },
                    })
                } else {
                    res = await axios.get('movies/random', {
                        headers: {
                            Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken
                        },
                    })
                }

                setContent(res.data[0]);
            }
            catch (err) {
                console.log(err);
            }
        }
        getRandomLists()
    }, [type])

    return (
        <div className='featured'>
            <img src={content.image} alt="" />
            <div className="info">
                <img src={content.imageTitle} alt="title" />
                <span className='desc'>{content.desc}</span>
                <div className="buttons">
                    <Link to='/watch' state={content} className='link'>
                        <button className="play">
                            <PlayArrowIcon />
                            <span>Play</span>
                        </button>
                    </Link>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
