import React from 'react'
import img from '../Images/Galleryimg/5.jpg'
import './about.css'
const about = () => {
  return (
    <div>
      <section class="about-us">
  <div class="container">
    <div className='text-center'><h1>About us <hr /></h1> </div>
    <div class="row">
      <div class="col-md-6">
        <img src={img} alt="About Us Image"/>
      </div>
      <div class="col-md-6">
        <h2>Railicious</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et luctus velit, sed iaculis nisi. Nulla facilisi. Sed at elit massa. Morbi id cursus nisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et luctus velit, sed iaculis nisi. Nulla facilisi. Sed at elit massa. Morbi id cursus nisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et luctus velit, sed iaculis nisi. Nulla facilisi. Sed at elit massa. Morbi id cursus nisi.
            </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default about
