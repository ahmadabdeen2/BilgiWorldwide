import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Link } from 'react-router-dom'
const VotingListItem = (props) => {
  return (
    <Link className='w-full h-[60px]' to={props.url}>
    <div className='border-2 flex items-center justify-between border-secondary rounded-lg bg-gradient-to-r via-primary from-purple-500 to-tertiary h-full w-full px-6'>
        <h2 className='sm:text-xl text-sm font-monumentbold text-gray-200 '> Best {props.title} </h2>
        <AiOutlineArrowRight className='text-gray-200 w-[20px] ' />
        </div>
        </Link>
  )
}

export default VotingListItem