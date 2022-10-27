import React from 'react'
import {VotingListItem} from '../components'

const VotingCat= [
    {
        id: 1,
        title: 'Fashion Show',
        url: '/fashion'
    },
    {
        id: 2,
        title: 'Food',
        url: '/food'
    },
    {
        id: 3,
        title: 'Decoration',
        url: '/decoration'
    },


]

const Vote = () => {

  return (
    <div className='flex flex-col items-center  bg-background min-h-[90vh]'>
        <h2 className='sm:text-5xl text-center text-xl font-monumentlight text-gray-200 sm:pt-32 pt-14'>
           Bilgi Worldwide <br/>International Day 2022 

        </h2>
        <p className='sm:text-xl font-poppins text-gray-200 pt-4'>
            Vote for your favorite candidate!
        </p>

<div className='grid grid-cols-1 w-[80%] sm:grid sm:grid-cols-2 gap-6  sm:mt-20 mt-12'> 
{VotingCat.map((item) => (
    <VotingListItem key={item.id} title={item.title} url={item.url} />
))}
  
        </div>

    </div>
  )
}

export default Vote