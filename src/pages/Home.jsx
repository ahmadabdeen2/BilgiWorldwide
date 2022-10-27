import React from 'react'
import {overlay1, circles, squares } from '../assets'
import {Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Home = () => {
  return (
    <>
    <div className='flex flex-col items-center min-h-[90vh] bg-pat' >
        
        <div className='flex flex-col w-full  items-center py-40 '>

        <h1 className='sm:text-8xl text-3xl font-monumentlight text-gray-200 '>
        Bilgi WorldWide
        </h1>
        <p className='sm:text-2xl hidden sm:block text-sm text-center font-poppins text-gray-200 pt-10'>
        Founded in 2018, we are a Student Club formed to improve <br/> Social Life by holding various events and activities.
        </p>
        <p className='text-sm sm:hidden text-center font-poppins text-gray-200 pt-10'>
        Founded in 2018, we are a Student Club formed to improve Social Life by holding various events and activities.
        </p>
        <Link to='/vote' className=' bg-primary text-center text-gray-200 font-poppins font-bold text-xs border-2 border-primary rounded-xl py-3 w-3/4 sm:w-1/4 px-5  mt-8'>
            International Day Voting Here!
        </Link>

        </div>
                </div>

                </>
  )
}

export default Home