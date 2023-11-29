import React from 'react'
import bgImg21 from '../Assect/bgImg21.jpg';
import { NavBar } from './NavBar';
import MainSection from './MainSection';



function HeroSection() {
    
  return (
    <div style={{ backgroundImage:`url(${bgImg21})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-[100%] min-h-screen p-2'>
        <NavBar/>
        <MainSection/>
    </div>
    
  )
}

export default HeroSection;