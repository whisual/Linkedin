import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import ShareIcon from '@mui/icons-material/Share';
import React, {useState, useEffect} from 'react'


const post = (props) => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

    
    return (
<>
<div className='posts  bg-white outline-black border-2 mr-5 ml-5 mt-8 w-98  rounded-lg py-3 px-3'>
      <div className="postHeader flex justify-between items-center">
        <div className="postLeft flex items-center">
            <Avatar src={props.DP}/>
            <h3 className='ml-2 font-semibold'>{props.Name} <span><br />  
      <h3 className='text-slate-500 text-left my-1 text-xs'>{date.toDateString()}</h3></span></h3>
        </div>
        <br />
        <div className="postRight">
            <MoreHorizIcon className='text-slate-500'/>
        </div>
      </div>
    
      <div className="content">
      <h3 className='text-slate-700 text-left ml-8 font-semibold my-1 text-md'>This is my third post</h3>

      </div>
      <div className="postFooter flex justify-around">
        <p className='text-sm text-slate-500  hover:text-blue-500 duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><ThumbUpIcon/></span>Like</p>
        <p className='text-sm text-slate-500  hover:text-black duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><CommentIcon/></span>Comment</p>
        <p className='text-sm text-slate-500  hover:text-black duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><ReplyAllIcon/></span>Repost</p>
        <p className='text-sm text-slate-500  hover:text-black duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><ShareIcon/></span>Share</p>
      </div>
    </div>

    <div className='posts  bg-white outline-black border-2 mr-5 ml-5 mt-3 w-98  rounded-lg py-3 px-3'>
      <div className="postHeader flex justify-between items-center">
        <div className="postLeft flex items-center">
            <Avatar src={props.DP}/>
            <h3 className='ml-2 font-semibold'>{props.Name} <span><br />  
      <h3 className='text-slate-500 text-left my-1 text-xs'>{date.toDateString()}</h3></span></h3>
        </div>
        <br />
        <div className="postRight">
            <MoreHorizIcon className='text-slate-500'/>
        </div>
      </div>
    
      <div className="content">
      <h3 className='text-slate-700 text-left ml-8 font-semibold my-1 text-md'>This is my second post</h3>

      </div>
      <div className="postFooter flex justify-around">
        <p className='text-sm text-slate-500  hover:text-blue-500 duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><ThumbUpIcon/></span>Like</p>
        <p className='text-sm text-slate-500  hover:text-black duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><CommentIcon/></span>Comment</p>
        <p className='text-sm text-slate-500  hover:text-black duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><ReplyAllIcon/></span>Repost</p>
        <p className='text-sm text-slate-500  hover:text-black duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><ShareIcon/></span>Share</p>
      </div>
    </div>

    <div className='posts  bg-white outline-black border-2 mr-5 ml-5 mt-3 w-98  rounded-lg py-3 px-3'>
      <div className="postHeader flex justify-between items-center">
        <div className="postLeft flex items-center">
            <Avatar src={props.DP}/>
            <h3 className='ml-2 font-semibold'>{props.Name} <span><br />  
      <h3 className='text-slate-500 text-left my-1 text-xs'>{date.toDateString()}</h3></span></h3>
        </div>
        <br />
        <div className="postRight">
            <MoreHorizIcon className='text-slate-500'/>
        </div>
      </div>
    
      <div className="content">
      <h3 className='text-slate-700 text-left ml-8 font-semibold my-1 text-md'>This is my first post</h3>

      </div>
      <div className="postFooter flex justify-around">
        <p className='text-sm text-slate-500  hover:text-blue-500 duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><ThumbUpIcon/></span>Like</p>
        <p className='text-sm text-slate-500  hover:text-black duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><CommentIcon/></span>Comment</p>
        <p className='text-sm text-slate-500  hover:text-black duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><ReplyAllIcon/></span>Repost</p>
        <p className='text-sm text-slate-500  hover:text-black duration-300 ml-4 mt-2 font-semibold cursor-pointer'><span className='mr-2'><ShareIcon/></span>Share</p>
      </div>
    </div>
</>
  )
}

export default post
