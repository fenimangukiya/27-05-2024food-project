import React from 'react'
import { Container } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../FackData/images/res-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiAction } from '../Store/Slice/CartSliceUi'


const nav_link =[
  {
    display:"Home",
    path:"/home"
  },
  {
    display:"Food",
    path:"/allfood"
  },
  {
    display:"Cart",
    path:"/cart"
  },
  {
    display:"Contact",
    path:"/contact"
  },
]

export default function Header() {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch()
  const cartToggle = () => {
    dispatch(cartUiAction.toggle())
  }

  return (
    <header className='header'>
        <Container>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='logo'><img src={logo} alt='logo'></img>
            <h5>Tasty Treat</h5>
            </div>

            <div className='navigation'>
              <div className='menu d-flex align-item-center gap-5'>
                {
                  nav_link.map((item,index) => (
                    <NavLink style={{color:'#000'}} to={item.path} key={index} className={(navClass) => navClass.isActive ? "active__menu":""}>{item.display}</NavLink>
                    
                  ))
                }
              </div>
            </div>

            <div className='nav__right d-flex align-items-center gap-3'>
              <span className='cart__icon' onClick={cartToggle}>
                <i className='ri-shopping-basket-line'></i>
                <span className='cart__badge bg-danger rounded mb-2 text-white'>{totalQuantity}</span>
              </span>

              <span className='user'>
                <Link to='/login' className='text-decoration-none'><i className='ri-user-line'></i></Link>
              </span>

              
            </div>
          </div>
        </Container>
    </header>
  )
}
