import React from 'react'
import './widgetsmall.scss'
import anime from '../../media-files/images/anime1.jpg'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function WidgetSmall() {
  return (
    <div className='widget-small'>
      <h2>New Joined Members</h2>
      <ul className="small-widget-list">
        <li className="small-widget-list-items">
          <img src={anime} alt="" />
          <div className="widget-user">
            <span className="user-name">Shinx Kaowl</span>
            <span className="user-title">Student</span>
          </div>
          <button>
              <VisibilityOutlinedIcon className='visibility-icon'/>
              <span>display</span>
          </button>
        </li>
        <li className="small-widget-list-items">
          <img src={anime} alt="" />
          <div className="widget-user">
            <span className="user-name">Shinx Kaowl</span>
            <span className="user-title">Student</span>
          </div>
          <button>
              <VisibilityOutlinedIcon className='visibility-icon'/>
              <span>display</span>
          </button>
        </li>
        <li className="small-widget-list-items">
          <img src={anime} alt="" />
          <div className="widget-user">
            <span className="user-name">Shinx Kaowl</span>
            <span className="user-title">Student</span>
          </div>
          <button>
              <VisibilityOutlinedIcon className='visibility-icon'/>
              <span>display</span>
          </button>
        </li>
        <li className="small-widget-list-items">
          <img src={anime} alt="" />
          <div className="widget-user">
            <span className="user-name">Shinx Kaowl</span>
            <span className="user-title">Student</span>
          </div>
          <button>
              <VisibilityOutlinedIcon className='visibility-icon'/>
              <span>display</span>
          </button>
        </li>
        <li className="small-widget-list-items">
          <img src={anime} alt="" />
          <div className="widget-user">
            <span className="user-name">Shinx Kaowl</span>
            <span className="user-title">Student</span>
          </div>
          <button>
              <VisibilityOutlinedIcon className='visibility-icon'/>
              <span>display</span>
          </button>
        </li>
        <li className="small-widget-list-items">
          <img src={anime} alt="" />
          <div className="widget-user">
            <span className="user-name">Shinx Kaowl</span>
            <span className="user-title">Student</span>
          </div>
          <button>
              <VisibilityOutlinedIcon className='visibility-icon'/>
              <span>display</span>
          </button>
        </li>
      </ul>
    </div>
  )
}
