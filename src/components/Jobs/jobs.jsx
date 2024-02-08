import React, {useState, useEffect} from 'react'
import Navbar from '../Header/navbar'
import Name from '../../assets/Linkedin-Black.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TocIcon from '@mui/icons-material/Toc';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SettingsIcon from '@mui/icons-material/Settings';

const jobs = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [query, setQuery] = useState("");
    
    const getJob = async() =>{
      const url = `https://jobs-api14.p.rapidapi.com/?query=${query}&location=India&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0`;
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '585fdc3d23msh9dd7be5efdb9b19p194a33jsn4bbbc21d5051',
          'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
        },
      }

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setSearchResults(result)
        console.log(result);
      } 
        catch (error) {
        console.error(error);
      }
    }

    useEffect(() =>{
      getJob()
    },[query])
    console.log(searchResults);

  return (
    <>
    <div>
        <Navbar/>
        </div>
    <div className='bg-fuchsia-50 w-auto h-screen'>
        
    <div className='main mt-5 '>
         <div className='search p-5'>
         <input className='bg-white w-96 h-10  outline-none rounded-3xl text-center text-gray-600 outline-gray-400  border-2' type="text"
  placeholder="Search by, title, skill or company" value={query} onChange={(e) => setQuery(e.target.value)}
/>

<button className='bg-black text-white w-24 h-10 rounded-3xl ml-5  hover:bg-green-500 duration-300' onClick={() => {
  setExpanded(true);
  getJob()
}}>
  Search
</button>
<div className="grid grid-cols-3 mt-8">
  <div className='bg-white w-60 rounded-lg p-5 text-left outline-black border-2'>
      <ul>
        <li className='text-gray-700 text-md font-semibold mt-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><TurnedInIcon/></span>My Jobs</li>
        <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><TocIcon/></span>Preferences</li>
        <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><AssessmentIcon/></span>Skill Assassment</li>
        <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><TextSnippetIcon/></span>Interview Prep</li>
        <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><InsertDriveFileOutlinedIcon/></span>Resume Builder</li>
        <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><YouTubeIcon/></span>Job Seeker Guidance</li>
        <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><SettingsIcon/></span> Application Settings</li>
      </ul>
  </div>
  <div className='w-full rounded-lg p-5'>
  {expanded && (
  <div className='w-98  mb-2 mt-5 grid grid-cols-3 items-center'>
    {searchResults.map((result) => (
      <>

<div className='w-98  mb-2 mt-5 grid grid-cols-3 items-center '>
<div class="relative grid grid-rows-3 justify-center items-center text-gray-700 bg-white bg-clip-border rounded-xl w-96 h-48 mb-2 ml-3 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
  <div class="relative mx-4 mt-10 w-20 h-20  overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-full">
    <img src="" alt="profile-picture" className='rounded-full w-20 h-20' />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 mt-16 text-lg antialiased font-semibold leading-snug tracking-normal text-black" >
     {result.name}
    </h4>
    <p class="block text-sm mt-3 antialiased leading-relaxed text-black bg-clip-text">
      {result.content}
    </p>
  </div>
</div>
  </div>
      </>  
    ))}
  </div>
)}
  </div>
  <div className='w-72 bg-white rounded-xl p-5 ml-20 text-left outline-black border-2'>
    <h3 className='text-md font-semibold'>Job seeker guidance</h3>
    <p className='text-xs font-thin text-gray-500'>Recommended based on your activity</p>
     <p className='font-semibold mt-4 mb-2'>I want to improve my resume</p>
     <p className='text-sm'>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
     <p className='text-sm font-semibold mt-2 text-gray-500 hover:text-black cursor-pointer'>Show more <span><ArrowForwardIcon fontSize='small'/></span></p>
     <div className="flex items-center">
     <img src={Name} alt="" className='h-16'/>
      <p className='text-xs'>Linkedin Corporation © 2024</p>
      </div>
  </div>
</div>

    
         </div>
    </div>

    </div>
</>
    
  )
}

export default jobs
