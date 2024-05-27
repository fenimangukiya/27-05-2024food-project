import React from 'react'
import { useDispatch } from 'react-redux';
//import image01 from './../FackData/images/product_01.1.jpg'
import { Link } from 'react-router-dom';
import { cartAction } from '../../Store/Slice/CartSlice';

export default function ProductCard(props) {

    const {id, title, image01 , price} = props.Pitem;
    const dispatch = useDispatch()

    const addTocart = () => {
        dispatch(cartAction.addItemn({
         id, title ,image01, price
        }))
    }

  return (
    <div className='product_item '>
        <div className='product_img'>
            <Link to={`/foods/${id}`}><img src={image01} alt='Product_Img' className='w-50'></img></Link>
        </div>
        <div className='product_contect'>
            <h5><Link to={`/foods/${id}`}>${title}</Link></h5>
                <div className='d-flex align-item-center justify-content-between'>
                    <span className='product_price'>${price}</span>
                    <button className='addtocart_btn' onClick={addTocart}>Add to Cart </button>
                </div>
        </div>
    </div>
  )
}
