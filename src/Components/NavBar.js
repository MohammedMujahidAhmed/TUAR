import React from 'react'
import logo from '../Assect/logo.png'

export const NavBar = () => {
  return (
    <div className='max-w-[1200px] m-auto border p-2 rounded-[30px] flex justify-between'>
        <a href='https://www.google.com'>
            <img src={logo} alt='logo' width={150} className='border rounded-[23px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'></img>
        </a>
        <div className='flex justify-center items-center w-[80%]'>
            <ul className='flex justify-center space-x-12 font-extrabold text-black flex-wrap'>
                <li className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>Home</li>
                <li className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>About Tuar</li>
                <li className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>Project</li>
                <li className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>GitHub</li>
            </ul>
        </div>
    </div>
  )
}
