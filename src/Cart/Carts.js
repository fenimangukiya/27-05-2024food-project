import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import { cartUiAction } from '../Store/Slice/CartSliceUi'



export default function Carts(props) {

    const dispatch = useDispatch()
    const cartToggle = () => {
        //alert('jads')
        dispatch(cartUiAction.toggle())
    }
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const cartItems = useSelector(state => state.cart.cartItems)

    // console.log(cartItems);

  return (
    <div className='cart_container'>
        <ListGroup className='cart'>
            <div className='cart_close' onClick={cartToggle}>
                <span><i className='ri-close-fill'></i></span>
            </div>
            <div className='cart_item-list'>
                {
                    cartItems.map((item) => {
                        return  <CartItem Pitem={item}></CartItem>
                    })
                }
            </div>
            <div className='cart_bottom d-flex align-item-center justify-content-between'>
                <h6>Subtotal amount: <span>${totalAmount}</span></h6>
                <button><Link to='/checkout'>Checkout</Link></button>
            </div>
        </ListGroup>
    </div>
  )
}
