import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import  Router  from '../Routes/Router'
import { useSelector } from 'react-redux'
import Carts from '../Cart/Carts'

export default function Layout()  {

  const Cart = useSelector(state => state.cartUi.cartVisible)

    return (
      <div>
        {
          Cart === true ? <Carts></Carts> : null
        }
          <Header></Header>
            <div>
                <Router></Router>
            </div>
            <Footer></Footer>
      </div>
    )
}

