import { saveAs } from 'file-saver';
import React from 'react'
import { FaDownload } from "react-icons/fa6";

export default function MainSection() {

    const downloadFile = () => {
        const fileUrl = "https://drive.google.com/uc?export=download&id=1bCP_e0_0B6S02LGv26w-Y2wOVGe_ituu";
        const fileName = "vasaviTuar.apk";
    
        saveAs(fileUrl, fileName);
    };

  return (
    <div className='max-w-[1200px] m-auto flex justify-center items-center min-h-[500px]'>
        <div className='flex flex-col items-center justify-center p-4 space-y-4'>
            <h1 className='font-extrabold text-neutral-950 text-[36px] sm:text-[54px] '>Visulize TOUR</h1>
            <div className='flex flex-col items-center'> 
                {/* <p className='font-bold bg-purple-300 text-stone-950 text-[24px]'>Discover the wonders of Visual Tourism:</p>
                <p className='font-bold bg-purple-300 text-stone-950 text-[24px]'>Transforming your travel adventures through the power of AR.</p> */}
                <p className='font-bold  text-stone-950 text-[24px]'>Discover the wonders of Visual Tourism:</p>
                <p className='font-bold  text-stone-950 text-[24px]'>Transforming your travel adventures through the power of AR.</p>
            </div>
            <div className='flex flex-wrap justify-center w-[100%]'>
                <button onClick={downloadFile} className="w-[90%] md:w-fit p-2 rounded-3xl bg-white sm:text-[18px] hover:drop-shadow-2xl group px-7 font-semibold text-gray-900 group flex items-center justify-center space-x-3">
                    <FaDownload />
                    <span className="group-hover:text-blueText">Download for Android</span>
                </button>
                {/* <button className="w-fit p-2 rounded-3xl bg-white sm:text-[18px] hover:drop-shadow-2xl group px-7 font-semibold text-gray-900 group flex items-center space-x-3">
                    <FaDownload />
                    <span className="group-hover:text-blueText">Download for Windows</span>
                </button> */}
            </div>
        </div>
    </div>
  )
}
