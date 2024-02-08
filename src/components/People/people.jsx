import React, {useState, useEffect} from 'react'
import Navbar from '../Header/navbar'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AodIcon from '@mui/icons-material/Aod';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import TagIcon from '@mui/icons-material/Tag';

const people = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [query, setQuery] = useState("");
    
    const getPeople = async() =>{

      const url = `https://linkedin-profile-data-api.p.rapidapi.com/?username=${query}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '585fdc3d23msh9dd7be5efdb9b19p194a33jsn4bbbc21d5051',
		'X-RapidAPI-Host': 'linkedin-profile-data-api.p.rapidapi.com'
	}
};
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
      getPeople()
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
         <input className='bg-white w-96 h-10 outline-none rounded-3xl text-center text-gray-600 outline-gray-400 border-2' type="text"
  placeholder="Search people..." value={query} onChange={(e) => setQuery(e.target.value)}
/>

<button className='bg-black text-white w-24 h-10 rounded-3xl ml-5  hover:bg-green-500 duration-300' onClick={() => {
  setExpanded(true);
  getPeople()
}}>
  Search
</button>
<div className="flex mt-8">
  <div className='bg-white w-72 text-left p-4 rounded-xl outline-black border-2'>
    <h3 className='text-lg font-semibold'>Manage my network</h3>
    <ul>
    <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><PeopleAltIcon/></span>Connections</li>
    <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><ContactPageIcon/></span>Contacts</li>
    <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><PersonIcon/></span>Following & followers</li>
    <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><GroupsIcon/></span>Groups</li>
    <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><CalendarMonthIcon/></span>Events</li>
    <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><AodIcon/></span>Pages</li>
    <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><UnsubscribeIcon/></span>Newsletters</li>
    <li className='text-gray-700 text-md font-semibold mt-4 mr-2 hover:text-black cursor-pointer duration-300'><span className='mr-2'><TagIcon/></span>Hashtags</li>
    </ul>
  </div>
  <div>
    <div className='bg-white mr-3 ml-3 w-auto rounded-xl  outline-black border-2'>
      <div className="flex justify-between h-14  items-center">
        <h3 className='ml-5 mr-80 text-md text-gray-700'>No pending requests</h3>
        <h3 className='ml-72 mr-5 text-md text-gray-700 font-semibold cursor-pointer hover:text-black duration-300'>Manage</h3>
      </div>
    </div>
    <div>
    {expanded && (
  <div className='w-98  mb-2 mt-5 grid grid-cols-3 items-center'>
    {
    searchResults.map((result) => (
      <>
<div className='w-98  mb-2 mt-5 grid grid-cols-3 items-center '>
<div class="relative grid grid-rows-3 justify-center items-center text-gray-700 bg-white bg-clip-border rounded-xl w-96 h-48 mb-2 ml-3 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
  <div class="relative mx-4 mt-10 w-20 h-20  overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-full">
    <img src={result.profilePiture} alt="profile-picture" className='rounded-full w-20 h-20' />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 mt-16 text-lg antialiased font-semibold leading-snug tracking-normal text-black" >
     {result.firstName}
    </h4>
    <p class="block text-sm mt-3 antialiased leading-relaxed text-black bg-clip-text">
      {result.companyName}
    </p>
  </div>
</div>
  </div>
      </>  
    ))}
  </div>
)}
    </div>
  </div>
</div>

         </div>
    </div>

    </div>
</>
    
  )
}

export default people
