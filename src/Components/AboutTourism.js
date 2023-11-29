import React from 'react'
import backPackImg from '../Assect/backpack_bg_removed.png'

export default function AboutTourism() {
  return (
    <div className='w-[100%] bg-[#F0ECEB]'>
        <div className='flex justify-between items-center max-w-[1200px] min-h-[550px] m-auto '>
            <img src={backPackImg} alt='TourismImage'></img>
            <div className='font-semibold'>
                <p>Tourism is an activity of traveling for pleasure, pilgrimage or recreation. People explore very new things in new places they travel, and they don’t know much about it. Tourist guides can help them, but they couldn’t explain everyone, every time. So, we came up with solution of an App, that is, TUAR, which shows information on the thing they show with phone, in real-time using AR technology.
                </p>
            </div>
        </div>
    </div>
  )
}
