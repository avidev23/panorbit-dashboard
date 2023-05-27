import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gallery from '../page/Gallery'
import Homepage from '../page/Homepage'
import LandingPage from '../page/LandingPage'
import Posts from '../page/Posts'
import Todo from '../page/Todo'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="homepage/:id" element={<Homepage />} />
        <Route path="post" element={<Posts />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todo" element={<Todo />} />
    </Routes>
  )
}

export default AllRoutes