import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div className='w-screen h-15 shadow-2xl flex items-center top-0 px-41 fixed bg-amber-50'>
        <div className='font-bold text-2xl w-[80%] text-blue-500'>
            <NavLink to={"/"}>Movie Hub</NavLink>
        </div>
        <div className='flex justify-around w-[20%]'>
            <div>
                <NavLink to={"/"}>Home</NavLink>
            </div>
            <div>
                <NavLink to={"/movies"}>Movies</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar