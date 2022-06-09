import React from 'react'
import './Watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import trailer from '../../media-files/videos/loop.mp4';


export default function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlinedIcon />
        </div>
        <video src={trailer} className='video' autoPlay={true} progess={0} controls ></video>
    </div>
  )
}
