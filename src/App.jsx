import './App.css'
import Main from './components/Main/main'
import Signin from './components/signin'
import Profile from './components/Profiles/profile'
import People from './components/People/people'
import Jobs from  './components/Jobs/jobs'
import {Routes, Route} from 'react-router-dom'

function App() {
    
  return (
    <>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/home' element={<Main/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/people' element={<People/>}/>
      <Route path='/jobs' element={<Jobs/>}/>

    </Routes>
    </>
  )
}

export default App
