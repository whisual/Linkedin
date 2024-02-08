import React, {useState} from 'react'
import {Avatar} from '@mui/material'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './post'
import DP from '../../assets/channels4_profile.jpg'


const feed = (props) => {
 const date = new Date();

  return (
    <div className='feed bg-white mr-5 ml-5 mt-5 w-3/5  h-32 rounded-lg py-3 outline-black border-2'>
      <div className="feedIP flex items-center justify-around ">
         <Avatar src={props.DP}/>
            <input className='outline-1 px-3 rounded-3xl w-2/3 h-12 outline-gray-400  border-2' type="text" placeholder='Start a post...' />
            <button className='bg-black hover:bg-green-500 text-white duration-300 h-10 w-20 rounded-3xl'>Post</button>
      </div>
      <div className="feedOptions flex items-center justify-evenly">
        <p className='text-sm text-slate-500 ml-4 mt-5 font-semibold cursor-pointer'><span className='mr-2 text-blue-500 hover:text-blue-700'><PermMediaIcon/></span>Media</p>
        <p className='text-sm text-slate-500 ml-4 mt-5 font-semibold cursor-pointer'><span className='mr-2 text-yellow-600 hover:text-yellow-700'><CalendarMonthIcon/></span>Event</p>
        <p className='text-sm text-slate-500 ml-4 mt-5 font-semibold cursor-pointer'><span className='mr-2 text-red-400 hover:text-red-700'><NewspaperIcon/></span>Write article</p>
      </div>
      <div>
        <Post DP={DP} Name="Vishal Sharma" Date={date.getTime}/>
      </div>
    </div>
  )
}

export default feed
