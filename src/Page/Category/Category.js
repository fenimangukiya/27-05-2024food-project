import React from 'react'
import categoryImg01 from '../../FackData/images/category-01.png'
import categoryImg02 from '../../FackData/images/category-02.png'
import categoryImg03 from '../../FackData/images/category-03.png'
import categoryImg04 from '../../FackData/images/category-04.png'
import { Col, Container , Row } from 'reactstrap'

export default function Category() {
    const CategoryData = [
        {
            Display:'Fastfood',
            imgUrl:categoryImg01
        },
        {
            Display:'Pizza',
            imgUrl:categoryImg02
        },
        {
            Display:'Burger',
            imgUrl:categoryImg03
        },
        {
            Display:'Bread',
            imgUrl:categoryImg04
        },
    ]
  return (
    <Container>
        <Row>
        {
        CategoryData.map((item,index) => {
            return(
                <Col lg='3' md='4' sm='6'>
            <div className='category_item d-flex align-items-center gap-3 mt-2  p-3'>
                <div className='category_img'>
                    <img src={item.imgUrl} alt=''></img>
                </div>
                <h6>{item.Display}</h6>
            </div>
        </Col>
            )
        })
    }
        </Row>
    </Container>
   
  )
}
