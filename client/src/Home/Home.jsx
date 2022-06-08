import React from 'react'
import Featured from '../mycomponents/featured/Featured'
import NavBar from '../mycomponents/navbar/NavBar'
import './Home.scss'


const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <Featured />
    </div>
  )
}

export default Home