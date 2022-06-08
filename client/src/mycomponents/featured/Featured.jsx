import React from 'react'
import './Featured.scss'
import pfp from '../../media-files/images/anime1.jpg'

export default function Featured() {
    return (
        <div className='featured'>
            <img src={pfp} alt="" />
        </div>
    )
}
