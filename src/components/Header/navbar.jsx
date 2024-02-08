import React from 'react';
import Logo from '../../assets/linkedin.png'
import Icons from './icons'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from '@mui/material'
import {Link} from 'react-router-dom'


const navbar = (props) => {

  return (
    <div className='header  flex items-center w-full h-10 px-2 '>
      <Link to='/home'>
      <div className="left w-20 flex items-center" >
         <img src={Logo} alt=""  className='h-12 ml-1 mt-1'/>
      </div>
      </Link>
      <form className="relative flex items-center w-max mx-auto bg-slate-200 rounded-lg">
        <SearchIcon className='ml-2'/>
         <input type="search" placeholder='Search' className='relative peer z-10 bg-transparent w-18 h-12 rounded-md border-none cursor-pointer outline-none pl-4 focus:w-full focus:border-line-300 focus:cursor-text focus:pl-14 focus:pr-4 duration-300'/>
      </form> 
      <div className="right ml-80 flex items-center ">
        <Link to='/home'>
          <Icons Icon={HomeIcon} title="Home"/>
        </Link>
        <Link to='/people'>
        <Icons Icon={PeopleIcon} title="Network"/>
        </Link>
        <Link to='/jobs'>
        <Icons Icon={WorkIcon} title="Jobs"/>
        </Link>
        <Icons Icon={TextsmsIcon} title="Messaging"/>
        <Icons Icon={NotificationsIcon} title="Notifications"/>
        <Link to='/profile'>
        <Icons avatar={Avatar} title={props.Name} />
        </Link>
        <Link to='/'>
          <h3 className='text-md font-semibold underline hover:text-red-500 duration-300'>Logout</h3>
        </Link>
        </div>
    </div>
  )
}

export default navbar
