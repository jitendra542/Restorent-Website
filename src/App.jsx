import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainIndex from './Pages/MainIndex'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthCard from './Components/AuthCard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<AuthCard/>}/>
    <Route path = '/*' element = {<MainIndex/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
