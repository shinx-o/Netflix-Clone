import React, { useState } from 'react'
import './ListItem.scss'
import testpic from '../../media-files/images/anime2.jpg'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import trailer from '../../media-files/videos/loop.mp4';


export default function ListItem({ index }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='list-item'
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={testpic} alt="" />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop muted></video>
                    <div className="item-info">
                        <div className="icons">
                            <PlayCircleIcon className='icon'/>
                            <AddCircleOutlineIcon className='icon' />
                            <ThumbUpOutlinedIcon className='icon'/>
                            <ThumbDownOutlinedIcon className='icon'/>
                        </div>
                        <div className="item-info-container">
                            <span>New</span>
                            <span className='limit'>16+</span>
                            <span>2h 55m</span>
                        </div>
                        <div className="genre">
                            Action
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
