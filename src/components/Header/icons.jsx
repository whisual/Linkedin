import React from 'react'
import {Avatar} from '@mui/material'
import DP from '../../assets/channels4_profile.jpg'

const navOptions = ({Icon, title , avatar}) => {
  return (
    <div className='navOptions flex flex-col hover:text-black duration-300 items-center ml-0 mr-6 text-sm font-thick text-gray-500 cursor-pointer'>
      {
        Icon && <Icon/>
      }
      {
        avatar && <Avatar src={DP} name={title}/>
      }
      <span>{title}</span>
    </div>
  )
}

export default navOptions
