import React, { useContext, useEffect, useState } from 'react'
import Featured from '../../mycomponents/featured/Featured'
import NavBar from '../../mycomponents/navbar/NavBar'
import List from '../../mycomponents/list/List'
import './Home.scss'
import axios from "axios";
import { GenreContext } from '../../context/genreContext/GenreContext'



const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const {genre} = useContext(GenreContext);

  
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        let res;
        if (type) {
          if (genre !== []) {
            res = await axios.get(`lists${type && "?type=" + type}&${genre && "genre=" + genre}`, {
              headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken
              },
            })

          } else {
            res = await axios.get(`lists${type && "?type=" + type}`, {
              headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken
              },
            })

          }
        } else {
          res = await axios.get(`lists${genre && "?genre=" + genre}`, {
            headers: {
              Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken
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