import React from 'react'
import { FaDownload } from "react-icons/fa6";

export default function MainSection() {
  return (
    <div className='max-w-[1200px] m-auto flex justify-center items-center min-h-[500px]'>
        <div className='flex flex-col items-center justify-center p-4 space-y-4'>
            <h1 className='font-extrabold text-neutral-950 text-[54px] '>Visulize TOUR</h1>
            <div className='flex flex-col items-center'> 
                {/* <p className='font-bold bg-purple-300 text-stone-950 text-[24px]'>Discover the wonders of Visual Tourism:</p>
                <p className='font-bold bg-purple-300 text-stone-950 text-[24px]'>Transforming your travel adventures through the power of AR.</p> */}
                <p className='font-bold  text-stone-950 text-[24px]'>Discover the wonders of Visual Tourism:</p>
                <p className='font-bold  text-stone-950 text-[24px]'>Transforming your travel adventures through the power of AR.</p>
            </div>
            <div className='flex flex-wrap justify-between w-[100%]'>
                <button class="w-fit p-2 rounded-3xl bg-white text-[18px] hover:drop-shadow-2xl group px-7 font-semibold text-gray-900 group flex items-center space-x-3">
                    <FaDownload />
                    <span class="group-hover:text-blueText">Download for Android</span>
                </button>
                <button class="w-fit p-2 rounded-3xl bg-white text-[18px] hover:drop-shadow-2xl group px-7 font-semibold text-gray-900 group flex items-center space-x-3">
                    <FaDownload />
                    <span class="group-hover:text-blueText">Download for Windows</span>
                </button>
            </div>
        </div>
    </div>
  )
}
