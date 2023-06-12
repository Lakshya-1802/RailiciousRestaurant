import React from 'react'
import './apply.css'
const apply = () => {
  return (
    <>
  {/* <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Full name</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form> */}
 <div className="form-container my-5 text-center">
  <h2>Apply Now</h2>
  <form>
    <div className="form-group">
      <input type="text" id="name" name="name" placeholder='Full Name' required />
    </div>
    <div className="form-group">
      <input type="email" id="email" name="email" placeholder='Email' required />
    </div>
    <div className="form-group">
      <input type="tel" id="contactNumber" name="contactNumber" placeholder='Contact Number' required />
    </div>
    <div className="form-group">
      <input type="text" id="role" name="role" placeholder='Job Profile' required />
    </div>
    <div className="form-group"style={{marginLeft:"15px"}}>
      <textarea id="address" name="address" placeholder='Address' required defaultValue={""} />
    </div>
    <button type="submit" className="submit-button">Submit</button>
  </form>
</div>


    </>
  )
}

export default apply
