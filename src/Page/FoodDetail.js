import React, { useEffect, useState } from 'react'
import ComenSection from './Category/ComenSection'
import { Col, Container, Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../FackData/Product'
import Helmet from '../Component/Helmet'
import { useDispatch } from 'react-redux'
import { cartAction } from '../Store/Slice/CartSlice'

export default function FoodDetail() {
  const { id } = useParams();
  const Product = products.find((item) => item.id === id);
  const {title, price, desc, category, image01, image02, image03}= Product;

  const[PreImage, setpreImage] = useState(image01);
  const [tab,settab] = useState("desc");

  useEffect(() => {
    setpreImage(image01)
    window.scrollTo(0,0)
  }, [])


 
  const dispatch = useDispatch()

  const addTocart = () => {
      dispatch(cartAction.addItemn({
       id, title ,image01, price
      }))
  }
  return <Helmet title='food'>
  
    <div>
      <ComenSection title={title}></ComenSection>

      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className='product_img'>
                <div onClick={() => setpreImage(image01)}>
                  <img src={image01} alt=''  className='img-fluid w-50'></img>
                </div>
                <div onClick={() => setpreImage(image02)}>
                  <img src={image02} alt='' className='img-fluid w-50'></img>
                </div>
                <div onClick={() => setpreImage(image03)}>
                  <img src={image03} alt='' className='img-fluid w-50'></img>
                </div>
              </div>
            </Col>
            <Col lg='3' md='3'>
            <div className='product__main-img'>
              <img src={PreImage} alt='' className='img-fluid '></img>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='single_product-contant'>
              <h2 className='product_title'>Name:{title}</h2>
              <p className='product_price'>price:<span className='product_price'>${price}</span></p>
              <p className='category mb-5'>Category: <span>{category}</span></p>
              <button className='addtocart_btn' onClick={addTocart}> Add to Cart</button>
            </div>
          </Col>
          <Col lg='12'>
            <div className='tabs d-flex align-items-center gap-5 py-2'>
              <h6 className='tab_active' onClick={() => settab('desc')}>Description</h6>
              <h6 onClick={() => settab('review')}>Review</h6>
            </div>

            {tab === 'desc' ? (
              <div>
                <p>{desc}</p>
              </div>
            ) : (
            <div className='tab_form'>
            <div className='review'>
              <p className='user_name mb-0'>Feni</p>
              <p className='user_email'>feni75@gmail.com</p>
              <p className='feedback_text'>Great Product</p>
            </div>

            <div className='review'>
              <p className='user_name mb-0'>Feni</p>
              <p className='user_email'>feni75@gmail.com</p>
              <p className='feedback_text'>Great Product</p>
            </div>

            <div className='review'>
              <p className='user_name mb-0'>Feni</p>
              <p className='user_email'>feni75@gmail.com</p>
              <p className='feedback_text'>Great Product</p>
            </div>
            <form className='form'>
              <div className='form_group'>
                <input type='text' placeholder='Enter your Name'></input>
              </div>
              <div className='form_group'>
                <input type='text' placeholder='Enter your Name'></input>
              </div>
              <div className='form_group'>
                <textarea type='text' rows={5} placeholder='Enter your Name'></textarea>
              </div>
                <button type='submit' className='addtocart_btn'>Submit</button>
            </form>
          </div>
          )  }
          </Col>
          </Row>
        </Container>
      </section>
    </div>
  </Helmet>
}
