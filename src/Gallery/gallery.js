import React from 'react'
import "./gallery.css"
import img1 from "../Images/Galleryimg/5.jpg"
import img2 from "../Images/Galleryimg/2.jpg"
import img3 from "../Images/Galleryimg/3.jpg"
import img4 from "../Images/Galleryimg/4.jpg"
import img5 from "../Images/Galleryimg/5.jpg"
import {Link} from 'react-router-dom'
// import Food from './food'
// import Ambience from './ambience'
// import OtherPhotos from './otherphotos'
const gallery = () => {
  return (
          
  <>
 <div ><h1 className='text-center'>Check Out Our Gallery </h1><hr/></div>
 <div>
      {/* AMBIENCE */}
  <section class="delicacies">
        <h2>Our Ambience</h2>
       
        <div class="row delicacies-row">
          <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div>
          {/* <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div> */}
        </div>
        <Link to='/ambiencegallery'>
        <button type="button" class="btn btn-secondary">More</button>
        </Link>
          
      </section>
      {/*Food Gallery*/}
      <section class="delicacies">
        <h2> Our Food</h2>
       
        <div class="row delicacies-row">
          <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div>
          {/* <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div> */}
        </div>
        <Link to='/foodgallery'>
        <button type="button" class="btn btn-secondary">More</button>
        </Link>
          
      </section>
      {/*Other Photos*/}
      <section class="delicacies">
        <h2>Videos</h2>
       
        <div class="row delicacies-row">
          <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div>
          {/* <div class="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div> */}
        </div>
        <Link to='/foodgallery'>
        <button type="button" class="btn btn-secondary">More</button>
        </Link>
          
      </section>
 </div>
  </>
   
  )
}

export default gallery
