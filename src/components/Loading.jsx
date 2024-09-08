import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Loading() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-white'>
       <div className='flex items-center px-8 py-3 bg-white-900 rounded-lg'>
         <AiOutlineLoading3Quarters
         className='w-10 h-10 animate-spin text-sky-500 mr-6' />
         <p className='text-zinc-900 text-6xl'>Loading...</p>
         </div>
        </div>
  )
}

export default Loading;