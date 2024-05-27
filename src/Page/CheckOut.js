import React from 'react'
import ComenSection from './Category/ComenSection'
function CheckOut() {
  return (
    <div>
      <ComenSection title="Checkout"></ComenSection>


    <h3 className='text-center mt-5'>shopping address</h3>
  <form className='w-50 mx-auto d-block ' >
   <div className="form-group  ">
        <input type="text" className="form-control"  placeholder='Name :'></input>
  </div>
 
  <div className="form-group   mb-3">
    <label  className=' '></label>
    <input type="email" className="form-control" placeholder='Email address :'></input>
    
  </div>
  <div className="form-group  mt-2 mb-3">
    
    <input type="number" className="form-control" placeholder='Number :'></input>
  </div>
  <div className="form-group  mt-2 mb-3">
    
    <input type="text" className="form-control" placeholder='Contry :'></input>
  </div>
  <div className="form-group  mt-2 mb-3">
    
    <input type="text" className="form-control" placeholder='City :'></input>
  </div>
  <div className="form-group  mt-2 mb-3">
    
    <input type="text" className="form-control" placeholder='Pin Code :'></input>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
export default CheckOut