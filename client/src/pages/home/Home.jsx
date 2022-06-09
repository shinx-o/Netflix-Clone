import React from 'react'
import Featured from '../../mycomponents/featured/Featured'
import NavBar from '../../mycomponents/navbar/NavBar'
import List from '../../mycomponents/list/List'
import './Home.scss'



const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home