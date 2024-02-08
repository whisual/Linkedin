import React from 'react'
import {Avatar} from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Groups3Icon from '@mui/icons-material/Groups3';
import {Link} from 'react-router-dom'
const sidebar = (props) => {
  return (
    <div className='sidebar flex flex-col w-48 mt-5 '>
      <div className="profile align-middle rounded-md pb-3 bg-white outline-black border-2">
        <img className='w-full h-12 rounded-t-md -mb-5' src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE3MDY4NDY5MDJ8MA&ixlib=rb-4.0.3" alt="" />
        <div className="details">
          <Link to='/profile'>
          <Avatar src={props.DP} className='m-auto object-contain'/>
          </Link>
            <h4 className='font-semibold mt-3'>{props.Name}</h4>
            <p className='text-xs text-slate-500'>ReactJS | Frontend Developer</p>
            <div className='mt-5 text-left'>
            <p className='text-xs text-slate-500 ml-5'>Profile Views</p>
            <p className='text-xs text-slate-500 ml-5'>Post Impressions</p>
            <div className='items-center'>
            <p className='text-xs text-slate-500 ml-4 mt-5 font-semibold cursor-pointer hover:text-black duration-300'><span><BookmarkIcon/></span>My Items</p>
            </div>
            </div>
            </div>
      </div>
      <div className='bg-white mt-3 text-left rounded-lg outline-black border-2'>
        <h1 className='text-sm text-black font-semibold ml-5 mt-3'>Recent</h1>
        <p className='text-xs text-slate-500 ml-5 mt-2 cursor-pointer hover:text-black duration-300'><span className='font-bold'>#</span> Web Development</p>
        <p className='text-xs text-slate-500 ml-5 mt-1 cursor-pointer hover:text-black duration-300'><span className='font-bold'>#</span> React</p>
        <p className='text-xs text-slate-500 ml-5 mt-1 cursor-pointer hover:text-black duration-300'><span className='font-bold'>#</span> React JS</p>
        <p className='text-xs text-slate-500 ml-5 mt-1 cursor-pointer hover:text-black duration-300'><span className='font-bold'>#</span> HTML Tags</p>
        <p className='text-xs text-slate-500 ml-5 mt-1 mb-3 cursor-pointer hover:text-black duration-300'><span className='font-bold'>#</span> Redux</p>
     
        <h1 className='text-sm text-blue-700 font-semibold ml-5 mt-5'>Groups</h1>
        <p className='text-xs text-slate-500 ml-5 mt-2 cursor-pointer hover:text-black duration-300'><span className='mr-1'><Groups3Icon/></span >Javascript</p>
        <p className='text-xs text-slate-500 ml-5 mt-1 cursor-pointer hover:text-black duration-300'><span className='mr-1'><Groups3Icon/></span>Coding Memes</p>
        <p className='text-xs text-slate-500 ml-5 mt-1 cursor-pointer hover:text-black duration-300'><span className='mr-1'><Groups3Icon/></span>Jobs Near Me</p>
        <p className='text-xs text-slate-500 ml-5 mt-1 cursor-pointer hover:text-black duration-300'><span className='mr-1'><Groups3Icon/></span>Web Developers United</p>
        <p className='text-xs text-slate-500 ml-5 mt-1 mb-3 cursor-pointer hover:text-black duration-300'><span className='mr-1'><Groups3Icon/></span>TCS NQT</p>
        </div>
    </div>
  )
}

export default sidebar
