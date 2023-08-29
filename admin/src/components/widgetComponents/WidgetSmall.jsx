import React, { useEffect, useState } from 'react'
import './widgetsmall.scss'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import axios from 'axios';
import defaultUser from '../../media-files/images/default user.png';

export default function WidgetSmall() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const fetchNewUsers = async () => {
      try {
        const res = await axios.get("/users/?new=true", { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWNiMGI0NjU5YWYxYmVjMzY0MzIwYiIsImlhdCI6MTY1NTExMzQxOCwiZXhwIjoxNjU1NTQ1NDE4fQ.gw5y_MtsZEs-DlXWzkwYPCbO9M77vqVc9LhRo2y6URo" } });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err)
      }

    }
    fetchNewUsers();
  }, []);

  return (
    <div className='widget-small'>
      <h2>New Joined Members</h2>
      <ul className="small-widget-list">
        {newUsers.map((user, key) => {
          return (
            <li key={key} className="small-widget-list-items">
              <div className="small-widget-user-container">
                <img src={user.profilePic || defaultUser} alt="" />
                <div className="widget-user">
                  <span className="user-name">{user.firstname + ' ' + user.lastname}</span>
                  <span className="user-title">Student</span>
                </div>
              </div>
              <button>
                <VisibilityOutlinedIcon className='visibility-icon' />
                <span>display</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
