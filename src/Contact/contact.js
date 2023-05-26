import React from 'react'
import './contact.css'
import img from '../Images/Galleryimg/1.jpg'
const contact = () => {
  return (
    <div>
      <div className='text-center' >
        <h1>Contact us</h1>
        <p style={{fontSize:"20px"}}>For any inquiries or to get in touch with us, please use the following contact information:</p>
      </div>

      <section class="contact" >
        <div class="container text-center">

          <div class="row">
            <div class="col-md-3">
              <i class="fas fa-map-marker-alt " style={{ fontSize: "40px", marginBottom: "20px" }}></i>
              <h3>Address</h3><hr />
              <div class="info-item">
                <span>Metro Station, Right Under, Sector 137, Noida, Uttar Pradesh 201305</span>
              </div>
            </div>
            <div class="col-md-3">
              <i class="fas fa-phone-alt" style={{ fontSize: "40px", marginBottom: "20px" }}></i>
              <h3>Contact</h3><hr />
              <div class="info-item text-center">
                <span>96979 24825</span>
              </div>
            </div>
            <div class="col-md-3">
              <i class="far fa-envelope" style={{ fontSize: "40px", marginBottom: "20px" }}></i>
              <h3>Email</h3><hr />
              <div class="info-item">
                <span style={{ fontSize: "16px" }}> railiciousnoida@gmail.com</span>
              </div>
            </div>
            <div class="col-md-3">

              <i class="far fa-clock" style={{ fontSize: "40px", marginBottom: "20px" }}></i>
              <h3>Timings</h3><hr />
              <div class="info-item">
                <span>Mon-Fri:<br/> 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* map */}
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=railicious noida&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          <a href="https://capcuttemplate.org/">Capcut Templates</a>
        </div>
      </div>
    </div>
  )
}

export default contact
