import React from 'react'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Liked from './Components/Liked'
import DisLiked from './Components/Disliked'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/liked" element={<Liked></Liked>}></Route>
      <Route path="/disliked" element={<DisLiked></DisLiked>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
