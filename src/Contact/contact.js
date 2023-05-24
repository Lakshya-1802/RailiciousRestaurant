import React from 'react'
import './contact.css'
import img from '../Images/Galleryimg/1.jpg'
const contact = () => {
  return (
    <div>
        <div className='text-center' >
            <h1>Contact us</h1>
            <p>For any inquiries or to get in touch with us, please use the following contact information:</p>
        </div>




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
