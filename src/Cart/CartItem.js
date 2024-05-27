import React from 'react'
import { ListGroupItem } from 'reactstrap'
//import image01 from '../FackData/images/product_01.1.jpg'
import { useDispatch } from 'react-redux';
import { cartAction } from '../Store/Slice/CartSlice';


export default function CartItem(props) {
  const { id, title, image01 ,price , totalprice , totalQuantity , quantity} = props.Pitem;

  const dispatch = useDispatch()
  const addItemn = () => {
      dispatch(cartAction.addItemn( {id, title, image01, price}))
  }

  const removeItem = () => {
    const {id} = props.Pitem
    dispatch(cartAction.removeItem({id}))
  }

  const deleteItem = () => {
    const {id} = props.Pitem
    dispatch(cartAction.deleteItem({id}))
  }



  return (
    <div >
      <ListGroupItem className='border-0 cart_item'>
        <div className='cart_item-info d-flex gap-2'>
          <img src={image01} alt='' className=''></img>

          <div className='cart_product-info w-100 d-flex align-items-center justyfy-content-between'>
            <div>
              <h6 className='cart_product-title'>{title}</h6>
              <p className='d-flex align-item-center gap-5 cart_product-price'>{totalQuantity}x <span>${totalprice}</span></p>

              <div className='d-flex align-items-center gap-5 justyfy-content-between increse_decrease-btn'>

                  <span className='increse-btn' onClick={addItemn}><i className='ri-add-line'></i></span>
                  <span className='quantity'>{totalQuantity}</span>
                  <span className='decrese-btn'><i className='ri-subtract-line' onClick={removeItem}></i></span>
              </div>
            </div>
          <span className='delete_btn' onClick={deleteItem}><i className='ri-close-circle-fill'></i></span>
          </div>
        </div>
      </ListGroupItem>
    </div>
  )
}
