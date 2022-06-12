import React from 'react'
import './featured.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Featured() {
  return (
    <div className='featured'>
        <div className="item">
            <h2>Revenue</h2>
            <div className="money-container">
                <span>$1706</span>
                <span className='rate'>-11.4<ArrowDownwardIcon className='arrow negative'/></span>
            </div>
            <span className='desc'>Compared to last month</span>
        </div>
        <div className="item">
            <h2>Sales</h2>
            <div className="money-container">
                <span>$2345</span>
                <span className='rate'>-1.4<ArrowDownwardIcon className='arrow negative'/></span>
            </div>
            <span className='desc'>Compared to last month</span>
        </div>
        <div className="item">
            <h2>Cost</h2>
            <div className="money-container">
                <span>$1542</span>
                <span className='rate'>2.4<ArrowUpwardIcon className='arrow'/></span>
            </div>
            <span className='desc'>Compared to last month</span>
        </div>
    </div>
  )
}
