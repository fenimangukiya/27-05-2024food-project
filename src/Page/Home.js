import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import heroImg from '../FackData/images/hero.png'
import { Link } from 'react-router-dom'
import Category from './Category/Category'
import Delivery from './Category/Delivery'

import foodCategoryImg01 from '../FackData/images/hamburger.png'
import foodCategoryImg02 from '../FackData/images/pizza.png'
import foodCategoryImg03 from '../FackData/images/bread.png'
import ProductCard from './Category/ProductCard'
import products from '../FackData/Product'

import WhyImg from '../FackData/images/location.png'

import NetworkImg from '../FackData/images/network.png'
import TestimonialSlider from './Slider/TestimonialSlider'
import Helmet from '../Component/Helmet'

export default function Home() {

    const [hotPizza,setHotPizza] = useState ([]);

    useEffect (() => {
      const filterPizza = products.filter(item => item.category === 'Pizza');
      const slicePizza = filterPizza.slice(0,4)

      setHotPizza(slicePizza)
    },[])

    const[category, setCategory] = useState('All');
    const [allProducts , setAllProducts] = useState (products)

      useEffect (() => {
        if(category === 'All'){
          setAllProducts(products)
        }
      
        if(category === 'Burger'){
          const FilterProduct = products.filter(item => item.category === 'Burger')
          setAllProducts(FilterProduct)
        }
      
        if(category === 'Pizza'){
          const FilterProduct = products.filter(item => item.category === 'Pizza')
          setAllProducts(FilterProduct)
        }
      
        if(category === 'Bread'){
          const FilterProduct = products.filter(item => item.category === 'Bread')
          setAllProducts(FilterProduct)
        }
      },[category]) 

      return<Helmet title='Home'>
  

    <div>

      {/* section-1 */}
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <h5 className='mb-3'>Easy way to make an order</h5>
              <h1 className='mb-4 hero__title'>
                <span>HUNGRY?</span> just wait<br></br> food at<span> your door</span>
              </h1>
              <p>
                  Serving Up Happiness, One Burger Time. Have it your way
                  at Mr.Burger!
                </p>
            </div>

            <div className='hero_btns d-flex align-items-center gap-5 mt-4'> 
                <button className='order_btn'>Order now <i className='ri-arrow-right-s-line'></i></button>
                <button className='all_foods-btn'><Link to='/foods' className='text-decoration-none'>see all foods</Link></button>
            </div>

            <div className='hero__service d-flex align-item-center gap-5 mt-5'>
              <p className='d-flex align-item-center gap-2'><span className='shiping__icon'><i className='ri-shield-check-line'></i></span>100% Secure Checkout</p>
              <p className='d-flex align-item-center gap-2'><span className='shiping__icon'><i className='ri-car-line'></i></span>No Shipping Charge</p>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero_img'>
              <img src={heroImg} alt='Hero' className='w-100'></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

      {/* section-2 */}
    <section>
      <Category></Category>
    </section>

      {/* section-3 */}
    <section className='container text-center py-5'>
        <h5>What We Serve</h5>
        <h2 className='fw-bold'>Just sit back at home</h2>
        <h2 className='fw-bold'>We will <span className='title-clr'>take care</span></h2>
        <p className='pt-3 mb-0'>Where every flavor tells a story.Low cost. High quality.</p>
        <p>For the love of delicious food.Life is dull without good food.</p>
      </section>

     
      <section>
          <Delivery></Delivery>
      </section>

     {/* section-4 */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2>Populer Food</h2>
            </Col>
            <Col lg="12">
              <div className='food_category bg-danger d-flex align-items-center justify-content-center  '>
                  <button className='all_btn foodActive' onClick={() => setCategory('All')}>All</button>
                  <button className='d-flex align-item-center gap-2 bg-danger ' onClick={() => setCategory('Burger')}><img src={foodCategoryImg01} alt='burger'></img>Burger</button>
                  <button className='d-flex align-item-center gap-2 bg-danger' onClick={() => setCategory('Pizza')}><img src={foodCategoryImg02} alt='burger'></img>Pizza</button>
                  <button className='d-flex align-item-center gap-2 bg-danger' onClick={() => setCategory('Bread')}><img src={foodCategoryImg03} alt='burger'></img>Bread</button>
              </div>
            </Col>
          </Row>

          <Row>
            {
               allProducts.map((item)=>{
                return <Col lg="3" md="4" key={item.id}  className='mt-5'>
                 <ProductCard Pitem={item}></ProductCard>
                {/*<ProductCard></ProductCard>*/}
             </Col>
               })
            }
          </Row>
        </Container>
      </section>

             {/* section-5 */}
    <section>
    <Container>
        <Row>
          <Col lg='6' md='6'>
              <img src={WhyImg} alt='' className='img-fluid'></img>
          </Col>
          <Col lg='6' md='6'>
          <div className='why_testy-treat'>
                <h2 className='tasty_treat-title mb-4'>Why Tasty Treat?</h2>
                <p className='tasty_treat_desc'>Lorem ipsum dolor,sit amet adipisicing elit. Minus,doloremque.Lorem ipsum dolor,sit amet consectetur adipisicing elit. Minus,doloremque.Lorem ipsum dolor,sit amet consectetur adipisicing elit. Minus,doloremque.</p>

                <ListGroup>
                    <ListGroupItem className='border-0 ps-0'>
                        <p className='choose_us-title d-flex align-item-center gap-2'>
                          <i className='ri-checkbox-circle-line'></i>
                          <p>Lorem ipsum dolor,sit amet  adipisicing elit. Minus,doloremque.Lorem ipsum dolor,sit amet consectetur adipisicing elit. </p>
                        </p>
                    </ListGroupItem>   
                    <ListGroupItem className='border-0 ps-0'>
                        <p className='choose_us-title d-flex align-item-center gap-2'>
                          <i className='ri-checkbox-circle-line'></i>
                          <p>Lorem ipsum dolor,sit amet  adipisicing elit. Minus,doloremque.Lorem ipsum dolor,sit amet consectetur adipisicing elit. </p>
                        </p>
                    </ListGroupItem>  
                    <ListGroupItem className='border-0 ps-0'>
                        <p className='choose_us-title d-flex align-item-center gap-2'>
                          <i className='ri-checkbox-circle-line'></i>
                          <p>Lorem ipsum dolor,sit amet  adipisicing elit. Minus,doloremque.Lorem ipsum dolor,sit amet consectetur adipisicing elit. </p>
                        </p>
                    </ListGroupItem>     
                </ListGroup>
          </div>      
          </Col>
        </Row>
      </Container>
    </section>

             {/* section-6 */}

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2>Hot Pizza</h2>
            </Col>  
            {
              hotPizza.map((item) => {
                return(
                  <Col lg='3' md='4' sm='6' key={item.id}>
                      <ProductCard Pitem={item}></ProductCard>
                  </Col> 
                )
              })
            } 
          </Row>
         </Container>
       </section> 


       {/* section-7 */}
      <section>
        <Container>
          <Row>
            <Container></Container>
            <Col lg='6' md='6'>
              <div className='testionion'>
                <h5 className='testionion_subtitle mb-4'>Testimonial</h5>
                <h4 className='testionion_title mb-4'>What Our <span>Customers</span>are saying</h4>
                <p>Lorem ipsum dolor,sit amet consectetur adipisicing elit. Lorem ipsum dolor,sit amet consectetur adipisicing elit. doloremque.Lorem ipsum dolor,sit amet consectetur adipisicing elit. Minus,doloremque.Lorem ipsum dolor,sit amet consectetur  elit. Minus,doloremque.Lorem ipsum dolor,sit amet consectetur adipisicing elit.Lorem ipsum dolor,sit amet consectetur adipisicing elit. Minus,doloremque.</p>
                  <TestimonialSlider></TestimonialSlider>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={NetworkImg} alt='NetworkImg' className='w-100'></img>
            </Col>
          </Row>
        </Container>
      </section>    

    </div>
  </Helmet>
}
