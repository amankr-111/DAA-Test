import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Model from './components/common/model'
import Home from './components/pages/Home'
import About from './components/pages/About'
import MainLayout from './components/layouts/MainLayout';
import FullCalender from './components/common/FullCalender';

function App() {
  const [count, setCount] = useState(1010)

  return (
    <>
       <Routes>
        <Route element={<MainLayout/>}>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/calender' element={<FullCalender/>} />
         </Route>
       </Routes>
    </>
  )
}

export default App
