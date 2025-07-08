import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Navbar from './components/Navbar'
import FetchId from './components/fetchId'

function App() {
  return (
    <>  
    <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Service/>} path='/services'/>
        <Route element={<FetchId/>} path='/fetch/:id'/>
      </Routes>
    </>
  )
}

export default App
