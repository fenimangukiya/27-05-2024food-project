import React, { useState } from 'react'
import ComenSection from './Category/ComenSection'
import { Col, Container, Row } from 'reactstrap'
import Product from '../FackData/Product'
import ProductCard from './Category/ProductCard'

import ReactPaginate from 'react-paginate';
import products from '../FackData/Product'

export default function AllFood() {

const [pageNumber, setPageNumber] = useState(0);
const [searchProduct, setSerchProduct] = useState("")

const productPerPage = 8;
const visitedPage = pageNumber * productPerPage;
const displayPage = products.slice(visitedPage, visitedPage + productPerPage)

const pageCount = Math.ceil(products.length / productPerPage);

const changePage = ({selected}) => {
    setPageNumber(selected);
};

  return (
    <div>
      <section>
        <ComenSection title='All Food'></ComenSection>
      </section>


      <section>
        <Container>
          <Row>
          <Col lg='6' md='6' sm='6'>
              <div className='serch__widget d-flex align-item-center justify-content-between w-50'>
                <input type='text' onChange={(e) => setSerchProduct(e.target.value)} placeholder="I'm looking for........"></input>
                <span><i className='ri-search-line'></i></span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6'>
              <div className='shorting__width text-end'>
                  <select className='w-50'>
                    <option>default</option>
                    <option value="ascending">Alphabetically, A-Z</option>
                    <option value="descending">Alphabetically, Z-A</option>
                    <option value="high-price">High Price</option>
                    <option value="low-price">low Price</option>
                  </select>
              </div>
            </Col>

            {
              (searchProduct === "" ? displayPage : products.filter((item) => {
                if (item.title.toLowerCase() .includes(searchProduct.toLowerCase()))
                return item;
              })).map((item) => {
                return <Col lg='3' md='6' sm='6' key={item.id} className='mb-4'>
                    <ProductCard Pitem={item}></ProductCard>
                  </Col>
              })
            }

            <div>
              <ReactPaginate  pageCount={pageCount}
                onPageChange={changePage}
                 previousLabel={" previous"}
                nextLabel={"next "}
                className ="paginationBttns">
              </ReactPaginate>
            </div>
          </Row>
        </Container>
      </section>

     
    </div>
  )
}
