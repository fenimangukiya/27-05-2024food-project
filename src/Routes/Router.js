import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Page/Home'
import AllFood from '../Page/AllFood'
import FoodDetail from '../Page/FoodDetail'
import Cart from '../Page/Cart'
import CheckOut from '../Page/CheckOut'
import Login from '../Page/Login'
import Register from '../Page/Register'
import Contact from '../Page/Contact'

export default function Routers() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/allfood' element={<AllFood></AllFood>}></Route>
          <Route path='/foods/:id' element={<FoodDetail></FoodDetail>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/cheackout' element={<CheckOut></CheckOut>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  )
}
 