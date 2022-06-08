import React from 'react'
import './Featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import featured from '../../media-files/images/anime1.jpg'
import title from '../../media-files/images/title.png'

export default function Featured() {
    return (
        <div className='featured'>
            <img src={featured} alt="" />
            <div className="info">
                <img src={title} alt="title" />
                <span className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias rerum quasi a. Eligendi officia tenetur sit, repellendus error id modi incidunt impedit deleniti, consectetur quisquam nemo quo explicabo consequatur.</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
