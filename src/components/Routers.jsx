import React from 'react'
import {Routes, Route, Switch} from 'react-router-dom'
import {Home, Vote, VotingForm} from '../pages'

const Routers = () => {
  return (
    <div>
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/vote"  element={<Vote/>} />
        <Route path='/fashion' element={<VotingForm/>} />
        <Route path='/food' element={<VotingForm/>} />
        <Route path='/decoration' element={<VotingForm/>} />
</Routes>

    </div>
  )
}

export default Routers