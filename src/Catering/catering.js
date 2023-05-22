import React from 'react'
import './catering.css'
import img1 from "../Images/CateringImages/catering1.jpg"
import img2 from "../Images/CateringImages/catering2.jpg"
import img3 from "../Images/CateringImages/catering 3.jpg"
const catering = () => {
  return (
    <div>
      <section class="services">
  <div class="container">
    <h2>Our Catering Services</h2>
    <hr/>
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="service">
          <img src={img1} alt="Service 1"/>
          <h3>Wedding Catering</h3>
          <p>Make your wedding memorable with our exquisite catering options.</p>
        </div>
      </div>
      <div class="col-sm-6 col-md-4">
        <div class="service">
          <img src={img2} alt="Service 2"/>
          <h3>Corporate Events</h3>
          <p>Impress your clients and colleagues with our professional catering services.</p>
        </div>
      </div>
      <div class="col-sm-6 col-md-4">
        <div class="service">
          <img src={img3} alt="Service 3"/>
          <h3>Private Parties</h3>
          <p>Host a perfect private party with our delectable food and impeccable service.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default catering
