import React, { useState } from 'react'
import Name from '../assets/Linkedin-Black.png'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import {signInWithPopup} from 'firebase/auth'
import {auth, googleProvider,githubProvider, emailProvider } from '../firebase/setup'
import {useNavigate} from 'react-router-dom'

const signin = () => {

  const[signin, setSignin] = useState(false)
  const navigate = useNavigate()

    const googleSignin = async() =>{
        try {
            await signInWithPopup(auth, googleProvider);
            auth.currentUser && navigate('/home')
        } catch (error) {
            console.error(error);
        }
    }

    const githubSignin = async() =>{
      try {
          await signInWithPopup(auth, githubProvider);
          auth.currentUser && navigate('/home')
      } catch (error) {
          console.error(error);
      }
  }

  const emailSignin = async() =>{
    try {
        await signInWithPopup(auth, emailProvider);
        auth.currentUser && navigate('/home')
    } catch (error) {
        console.error(error);
    }
}

  return (
    <>
    <div className='signin bg-slate-100 rounded-md p-3'>
     <div className="header flex justify-between items-center w-100 h-20">
      <img className='w-40' src={Name} alt="" />
      <div>
      <button className='mr-10 hover:text-green-500 duration-300' onClick={e=> setSignin(true)}>Join now</button>
      <button className='bg-black text-white w-24 h-10 rounded-3xl ml-5  hover:bg-green-500 duration-300' onClick={googleSignin}>Sign in</button>
      </div>
     </div>
     <div className="grid grid-cols-2"> 
     {
      signin === false ? (
        <form action="">
        <div className='text-left mt-8'>
       <h1 className='text-5xl font-thin leading-snug text-red-700'>Welcome to your <br />professional community</h1>
       <p className='mt-10'>Email or phone</p>
       <input type="text" className='bg-slate-200 w-72 h-12 rounded-lg mt-1' />
       <p className='mt-2'>Password</p>
       <input type="password" className='bg-slate-200 w-72 h-12 rounded-lg mt-1'/>
       <br />
       <button className='bg-black text-white w-72 h-12 rounded-3xl mt-5  hover:bg-green-500 duration-300' onClick={emailSignin}>Sign in</button>
       <p className='mt-5'>Not a member ? <span className='text-blue-500 font-semibold cursor-pointer' onClick={e=>setSignin(true)}>Register here</span></p>
       <p className='ml-32 mt-3 mb-3'>or</p>
     </div>
     </form>
     
      )
      :
      (
        <form action="">
           <div className='text-left mt-8'>
             <h1 className='text-5xl font-thin leading-snug text-red-700'>Welcome to your <br />professional community</h1>
             <p className='mt-5'>First Name</p>
             <input type="text" className='bg-slate-200 w-72 h-12 rounded-lg mt-1' />
             <p className='mt-3'>Last Name</p>
             <input type="text" className='bg-slate-200 w-72 h-12 rounded-lg mt-1' />
             <p className='mt-3'>Email or phone</p>
             <input type="text" className='bg-slate-200 w-72 h-12 rounded-lg mt-1' />
             <p className='mt-3'>Create password</p>
             <input type="password" className='bg-slate-200 w-72 h-12 rounded-lg mt-1' />
             <p className='mt-3'>Already a member ? <span className='text-blue-500 font-semibold cursor-pointer' onClick={e=>setSignin(false)}>Login here</span></p>
             <br />
             <button className='bg-black text-white w-72 h-12 rounded-3xl mt-3'onClick={emailSignin}>Sign up</button>
          </div>
        </form>
       
      )
     } 
     <div>
      <img src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="" />
     </div>
     </div>
     <button className='bg-slate-200 w-72 h-12 rounded-3xl mt-1 flex justify-start items-center p-6' onClick={googleSignin}>Continue with google<span className='ml-14'><GoogleIcon/></span></button>
     <button className='bg-black text-white w-72 h-12 rounded-3xl mt-2 flex justify-start items-center p-6' onClick={githubSignin}>Sign in with github<span className='ml-20'><GitHubIcon/></span></button>

    </div>
    </>
  )
}

export default signin
