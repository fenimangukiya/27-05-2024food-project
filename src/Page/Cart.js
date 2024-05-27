import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import ComenSection from './Category/ComenSection';
import { Link } from 'react-router-dom';
import { cartAction } from '../Store/Slice/CartSlice';

export default function Cart() {
    const cartItems = useSelector((state) =>state.cart.cartItems)
// console.log(CartItem);
//    console.log(CartItem)

const dispatch = useDispatch();
const deleteItem = (id) => {
    dispatch(cartAction.deleteItem({ id }));
};
const totalAmount = useSelector(state => state.cart.totalAmount)

// const deleteItem = () => {
//   const {id} = props.Pitem
//   dispatch(cartAction.deleteItem({id}))
// }


const Tr = (props) => {
    //   console.log(props.items);
      const {id, title, image01, price, quantity } = props.Pitem
  
      return(
          <tr>
              <td className='text-center'><img src={image01} style={{width:"40px"}}></img></td>
              <td className='text-center'>{title}</td>
              <td className='text-center'>${price}</td>
              <td className='text-center'>{quantity}</td>
              <td className='text-center' onClick={() => props.delete(id)}>
                  <i class="ri-delete-bin-line" ></i>
              </td>
          </tr>
      )
  }

  return (
    <div>
        <div>
      <ComenSection title='Carts' ></ComenSection>
      </div>

    <section>
        <Container>
            <Row>
              {cartItems.length === 0 ? (
                <h5 className="text-center mt-5"> Your  cart is empty</h5>
              ) : (
                <Col lg='12'>
                <table className="table table-bordered">
                    <thead>
                      <tr>
                         <th >Image</th>
                         <th >Product Title</th>
                         <th >Price</th>
                         <th >totalQuantity</th>
                         <th >Delete</th>
                     </tr>
                    </thead>
                    <tbody>
                     {
                        cartItems.map((item) => {
                            return <Tr  key={item.id} Pitem={item} delete={deleteItem}></Tr>
                        })
                     }
                  </tbody>
                </table>
              </Col>
              )}

              <h6>totalAmount=${totalAmount}</h6>
              <div className='align-item-center'>
                  <Link to='/allfood'>
                      <Button className='bg-danger pt-2 pb-2 ps-4 pe-a me-3'>Continue to Shopping</Button>  
                  </Link>  
                  <Link to='/cheackout'>
                      <Button className='bg-danger pt-2 pb-2 ps-4 pe-a me-3'>checkout</Button>  
                  </Link>  
              </div> 
            </Row>
        </Container>
      </section>
   </div>
  )
}

