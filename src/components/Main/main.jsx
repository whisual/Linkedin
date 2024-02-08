import React from 'react'
import Navbar from '../Header/navbar'
import Sidebar from '../Sidebar/sidebar'
import Feed from '../Feed/feed'
import Rightbar from '../Rightbar/rightbar'
import DP from '../../assets/channels4_profile.jpg'

const main = () => {
  return (
    <div className='appWrapper'>
    <Navbar DP={DP} Name='Vishal Sharma'/>
    <div className="body flex bg-fuchsia-50 mt-5 p-3">
      <Sidebar  DP={DP} Name='Vishal Sharma'/>
      <Feed  DP={DP} Name='Vishal Sharma'/>
      <Rightbar/>
    </div>
    </div>
  )
}

export default main
