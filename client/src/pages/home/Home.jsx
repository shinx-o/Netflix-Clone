import React, { useEffect, useState } from 'react'
import Featured from '../../mycomponents/featured/Featured'
import NavBar from '../../mycomponents/navbar/NavBar'
import List from '../../mycomponents/list/List'
import './Home.scss'
import axios from "axios";



const Home = ({ type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);


  useEffect(() => {
    const getRandomLists = async () => {
      try {
        let res;
        if (type) {
          if (genre !== []) {
            res = await axios.get(`lists${type && "?type=" + type}&${genre && "genre=" + genre}`, {
              headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWNiMGI0NjU5YWYxYmVjMzY0MzIwYiIsImlhdCI6MTY1NDgwMTcwMiwiZXhwIjoxNjU1MjMzNzAyfQ.LnbLkoxvVtuHvsh0LwOyY55j4xxihJLDnBOElsGJ-Vw"
              },
            })

          } else {
            res = await axios.get(`lists${type && "?type=" + type}`, {
              headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWNiMGI0NjU5YWYxYmVjMzY0MzIwYiIsImlhdCI6MTY1NDgwMTcwMiwiZXhwIjoxNjU1MjMzNzAyfQ.LnbLkoxvVtuHvsh0LwOyY55j4xxihJLDnBOElsGJ-Vw"
              },
            })

          }
        } else {
          res = await axios.get(`lists${genre && "?genre=" + genre}`, {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWNiMGI0NjU5YWYxYmVjMzY0MzIwYiIsImlhdCI6MTY1NDgwMTcwMiwiZXhwIjoxNjU1MjMzNzAyfQ.LnbLkoxvVtuHvsh0LwOyY55j4xxihJLDnBOElsGJ-Vw"
            },
          })
        }

        setLists(res.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    getRandomLists()
  }, [type, genre])


  return (
    <div className='home'>
      <NavBar type={type}/>
      <Featured type={type} />
      {lists.map((list, key) => {
        return (
          <List list={list} key={key} />
        )
      })}
    </div>
  )
}

export default Home