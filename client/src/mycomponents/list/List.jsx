import React, { useState, useRef } from 'react'
import './List.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

export default function List() {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();
    
    const sliderMove = (dir) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (dir === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${1840 + distance}px)`;
        }
        
        if (dir === 'right' && slideNumber < 7) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-1840 + distance}px)`;
        }
    }

    return (
        <div className='list'>
            <span className="list-title">Popular On Netflix</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon className='slider-arrow left' onClick={() => {sliderMove('left') }} style={{display : !isMoved && 'none'}}/>
                <div className="container" ref={listRef} >
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                </div>
                <ArrowForwardIosOutlinedIcon className='slider-arrow right' onClick={() => { sliderMove('right') }} />
            </div>
        </div>
    )
}
