import React from 'react'
import Navbar from '../Header/navbar'
import {Link} from 'react-router-dom'
import DP from '../../assets/channels4_profile.jpg'
import CreateIcon from '@mui/icons-material/Create';
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';

const profile = () => {
  return (
    <div className='bg-fuchsia-50 w-100 h-screen'>
     <div className='bg-white pb-3'>
      <Navbar/>
     </div>
      <div className='flex justify-between p-3 mt-2'>
        <div className="profile bg-white rounded-lg w-2/3 h-screen mr-1 outline-black border-2">
           <img src="https://media.licdn.com/dms/image/D5616AQHdEMsu-Devnw/profile-displaybackgroundimage-shrink_350_1400/0/1705775852987?e=1712793600&v=beta&t=HUP_0F1xvypGgZXHt5xIqd9vGPSoAvVEsLCoaa0rLko" alt="" className='rounded-t-lg -mb-20' />
           <img src={DP} alt="" className='w-36 h-36 border-white outline-white border-4 rounded-full ml-5'/>
         <div className='flex justify-between'>
         <div className='text-left p-5'>
           <h1 className='font-semibold text-2xl'>Vishal Sharma</h1>
           <h3 className='text-md text-gray-600 mt-1'>ReactJS | Frontend Developer</h3>
           <h3 className='text-sm text-gray-500 mt-2'>Haridwar, Uttarakhand</h3>
           <Link to='https://github.com/whisual'>
            <h3 className='text-blue-500 font-semibold text-sm mt-1 flex items-center'>Github <span className='ml-1'><LaunchSharpIcon fontSize='small'/></span></h3>
            </Link>
            <h3 className='text-blue-500 font-semibold text-md mt-1'>403 followers  .  393 connections</h3>
            <button className='bg-blue-500 text-white rounded-3xl mt-2 w-20 h-8 mr-3'>Open to</button>
            <button className=' text-black border-2 outline-1 mt-2 border-black rounded-3xl w-44 h-8 mr-2'> Add profile section</button>
            <button className='border-2 border-gray-700 text-gray-500 rounded-3xl w-16 h-8 mr-3'>More</button>
            <div className='bg-slate-300 w-96 h-20 mt-6 rounded-lg p-2'>
              <h3 className='text-sm font-semibold text-gray-900'>Open to work <span className='text-sm ml-60'><CreateIcon fontSize='small'/></span></h3>
              <h3 className='text-sm font-semibold text-gray-900'>HTML Developer, Frontend Developer Roles</h3>
              <h3 className='text-sm font-semibold text-blue-500'>Show Details</h3>
            </div>
           </div>
           <div className='mr-3'>
            <div className='text-right mb-5'><CreateIcon/></div>
            <div className='flex justify-around items-center'>
              <img src="https://media.licdn.com/dms/image/C4E0BAQEGw09XmbKg3A/company-logo_100_100/0/1630618196563/internship_studio_logo?e=1715212800&v=beta&t=3Ehy_PlfLAFeReiaNMBETmKe87FhANN71PrV29Ciom0" alt="" className='w-6 h-6'/>
            <h3 className='text-sm font-semibold ml-2'>Internship Studio</h3>
            </div>
            <div className='flex justify-around items-center'>
              <img src="https://media.licdn.com/dms/image/C510BAQErF9faViMf1g/company-logo_100_100/0/1631424652418/college_of_engineering_roorkee_coer__logo?e=1715212800&v=beta&t=hOIHUmGcyVIs1uGAtEoUju8aYhHmt51KpdeA34zGoxM" alt="" className='w-6 h-6'/>
            <h3 className='text-sm font-semibold ml-1'>COER University</h3>
            </div>
            
           </div>
           
         </div>
          </div>
        <div className="sideProfile w-1/3 bg-transparent rounded-lg ml-5 grid grid-rows-2">
          <div className="bg-white mb-2 h-72 rounded-lg outline-black border-2">
            <h1 className='text-xl font-semibold flex justify-between pt-4 px-4'>Profile language <span><CreateIcon/></span></h1>
            <p className='text-sm  text-left px-4 text-gray-500 mt-1 mb-4'>English</p>
            <h1 className='text-xl font-semibold flex justify-between pt-3 px-4'>Public, profile & URL <span><CreateIcon/></span></h1>
            <Link to='https://www.linkedin.com/in/whisual/'>
            <p className='text-sm  text-left px-4 text-gray-500 mt-1 mb-4'>www.linkedin.com/in/whisual</p>
            </Link>
          </div>
            <Link to='https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fwhisual%2F&referenceId=eaQesRGtR5KooRqDeoE5Ag%3D%3D&upsellOrderOrigin=premium_nav_upsell_text&utype=job'>
            <div className='bg-white p-4 rounded-lg outline-black border-2'>
             <p className='text-sm text-gray-500 mb-3'>Vishal, boost your job search with Premium</p>
             <div className='flex justify-around px-9 mb-3'>
              <img src="https://media.licdn.com/dms/image/D5603AQGBVQAGzl0r4A/profile-displayphoto-shrink_100_100/0/1705775409584?e=1712793600&v=beta&t=iL4E2RQOAEKiqZ4oM7qmRIBg1i0lma19oZs_b1Wqm2k" alt="" className='rounded-full' />
              <img src="https://media.licdn.com/dms/image/C560EAQE4aQUhhAOPpg/rightRail-logo-shrink_200_200/0/1663316649055?e=1707768000&v=beta&t=Uq1nx4Dtz-nxig0sdK8GLIVfdSJ8cS6cb5iOiw-gxoI" alt="" />
             </div>
             <h3 className='text-lg text-gray-500 mb-3'>See who's viewed your profile in the last <br /> 90 days</h3>
             <button className='w-24 h-10 border-2 border-yellow-700 rounded-3xl hover:bg-yellow-700 hover:text-white duration-300'>Try for free!</button>
            </div>
            </Link>
          
        </div>
      </div>
    </div>
  )
}

export default profile
