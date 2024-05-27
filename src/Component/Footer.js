import React from 'react'
import logo from '../FackData/images/res-logo.png'

export default function Footer() {
  return (
    <div>
      <div className='container-fluid mt-5' style={{backgroundColor:"#fde4e4"}}>
      <section className='container py-5'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
              <img src={logo} alt='not-found'  style={{mixBlendMode: 'multiply'}}></img>
              <p className='pt-2'>Serving Up Happiness, One Burger at a Time. Have it your way at Mr.Burger!</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
              <h5 className='fw-bold pt-4'>Delivary Time</h5>
              <p className='fw-bold pt-3 mb-0'>Sunday - Thursday</p>
              <p>10:00am - 11:00pm</p>

              <p className='fw-bold pt-3 mb-0'>Friday - Satarday</p>
              <p>Off Day</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <h5 className='fw-bold pt-4'>Contact</h5>
            <p>Location: Abc-2 Mall,MotaVarchha,Surat.</p>

            <p className='fw-bold pt-3 mb-0'>Phone: 9090909090</p>
           
            <p className='fw-bold pt-3 mb-0'>Email: mr.burger@gmail.com</p>
         
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <h5 className='fw-bold pt-4'>Newsletter</h5>
            <p>Subscribe our newsletter</p>

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Username"></input>
              <span className="material-symbols-outlined input-group-text">mail</span>
            </div>
          </div>
        </div>
        
      </section>
      <div className='container'>
      <div className='row'>
          <div className='col'>
            <p className='pt-5 fw-bold' style={{color:'maroon'}}>Copyright - 2024, website made by Digivelly pvt ltd. All Rights Reserved.</p>
          </div>
          <div className='col'>
            <p className='pt-4 text-end'><i className="fa fa-instagram" style={{fontSize:"36px", margin:"10px"}}></i> <i className="fa fa-facebook-square" style={{fontSize:"36px", margin:"10px"}}></i> <i className="fa fa-twitter-square" style={{fontSize:"36px", margin:"10px"}}></i> <i className="fa fa-linkedin-square" style={{fontSize:"36px", margin:"10px"}}></i></p>
          </div>
        </div>
      </div>
      </div> 
    </div>
  )
}
 