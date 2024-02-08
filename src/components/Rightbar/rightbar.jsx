import React, { useEffect, useState } from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const rightbar = () => {

    const [news, setNews] = useState([])


    const getNews = () =>{
        fetch(`https://newsapi.org/v2/everything?q=linkedin&sortBy=popularity&pageSize=7&apiKey=20595fb76033412cb889ca14dfc49de0`)
        .then(res => res.json())
        .then(json => setNews(json.articles))
    }
    useEffect(() =>{
        getNews()
    },[])
    console.log(news);

  return (
    <div className='rightbar flex flex-col w-60 h-screen mt-5 py-3 px-3 bg-white text-left rounded-lg outline-black border-2'>
          <h2 className='text-lg font-semibold'><span ></span>Linkedin News</h2>
    {news?.filter(data => data.title).map((data)=>{
        return <>
             <div>
      <h3 className='text-gray-900 mt-2 text-sm font-semibold ' key={Math.random()*10}><span><FiberManualRecordIcon fontSize='small'/></span>{data.title}</h3>
      <p className='text-xs text-slate-500 mt-2 mb-2'>- {data.author}</p>
      </div>
    
        </>
    })}
 </div>
  )
}

export default rightbar
