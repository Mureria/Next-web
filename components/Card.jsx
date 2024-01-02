import React from 'react'
import { IoMdStarOutline } from 'react-icons/io'
import { MdGroups2, MdOutlineArticle } from 'react-icons/md'
import { IoCodeSlash, IoCallOutline  } from 'react-icons/io5'

const Card = () => {
  return (
    <div className='flex flex-col  shadow-orange-800  md:flex-row justify-between items-center mx-8 md:mx- py-4 px-6 mb-20'>
        <div className='flex flex-col justify-center items-center gap-2 my-10'>
            <div className='bg-orange-600 rounded-full p-4'><MdGroups2 size={45}/></div>
            <div className='text-4xl font-semibold  text-orange-600'>231</div>
            <div className=' text-orange-500'>Happy Customers</div>
        </div>

        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='bg-slate-900 rounded-full p-4'><IoMdStarOutline size={45} /></div>
            <div className='text-4xl font-semibold  text-slate-700'>600</div>
            <div className=' text-slate-500'>Reviews</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='bg-red-500 rounded-full p-4'><IoCodeSlash size={45} /></div>
            <div className='text-4xl font-semibold  text-red-500'>1,260</div>
            <div className=' text-red-400'>Issues</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='bg-slate-900 rounded-full p-4'><MdOutlineArticle size={45} /></div>
            <div className='text-4xl font-semibold  text-slate-700'>290</div>
            <div className=' text-slate-500'>Blogs</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='bg-orange-600 rounded-full p-4'><IoCallOutline size={45} /></div>
            <div className='text-4xl font-semibold  text-orange-600'>24/7</div>
            <div className=' text-orange-500'>Help Desk</div>
        </div>
        
    </div>
  )
}

export default Card