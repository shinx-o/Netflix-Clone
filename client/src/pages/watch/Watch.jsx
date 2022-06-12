import React from 'react'
import './Watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useLocation } from 'react-router-dom';


export default function Watch() {

  const location = useLocation();
  console.log(location)
  const movie = location.state;

  return (
    <div className='watch'>
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon />
        </div>
      </Link>
      <video src={movie.video} className='video' autoPlay={true} progess={0} controls ></video>
    </div>
  )
}
