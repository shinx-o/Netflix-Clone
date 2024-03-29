import React, { useState, useRef } from 'react'
import './List.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

export default function List({list}) {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const sliderMove = (dir) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (dir === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${2093 + distance}px)`;
        }

        if (dir === 'right' && slideNumber < 7) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-2093 + distance}px)`;
        }
    }

    return (
        <div className='list'>
            <span className="list-title">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon className='slider-arrow left' onClick={() => { sliderMove('left') }} style={{ display: !isMoved && 'none' }} />
                <div className="container" ref={listRef} >
                    {list.content.map((item, key) => {
                        return (<ListItem item={item} key={key} index={key} />)
                    })}
                    {list.content.map((item, key) => {
                        return (<ListItem item={item} key={key} index={key} />)
                    })}
                    {list.content.map((item, key) => {
                        return (<ListItem item={item} key={key} index={key} />)
                    })}
                </div>
                <ArrowForwardIosOutlinedIcon className='slider-arrow right' onClick={() => { sliderMove('right') }} />
            </div>
        </div>
    )
}
