import React from 'react'
import service1 from '../../FackData/images/service-01.png'
import service2 from '../../FackData/images/service-02.png'
import service3 from '../../FackData/images/service-03.png'
import { Col, Container, Row } from 'reactstrap'

export default function Delivery() {

    const deliveryDate = [
        {
            Displaye:'Qucik Delivary',
            p:'“Get the food you want delivered at Uber speed.Groceries delivered in as fast 1 hour.”',
            img:service1
        },
        {
            Displaye:'Qucik Delivary',
            p:'“Get the food you want delivered at Uber speed.Groceries delivered in as fast 1 hour.”',
            img:service2
        },
        {
            Displaye:'Qucik Delivary',
            p:'“Get the food you want delivered at Uber speed.Groceries delivered in as fast 1 hour.”',
            img:service3
        },
    ]

  return (
    <Container>
        <Row>
            {
                deliveryDate.map((data,index) => {
                    return(
                        <Col lg='4' md='3' sm='6'>
                            <div className='card box2 border-0 '>
                                <img src={data.img} style={{width:'150px',margin:'auto'}} alt=''></img>
                                <div className="card-body text-center">
                                    <h5 className='card-title fw-bold'>{data.Displaye}</h5>
                                    <p>{data.p}</p>
                                </div>    
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    </Container>
  )
}
