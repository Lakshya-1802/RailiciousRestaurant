import React from 'react'
import "./gallery.css"
import img1 from '../Images/Galleryimg/Ambiencegallery/ambience11.jpg'

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
  <section className="delicacies">
        <h2>Our Ambience</h2>
       
        <div className="row delicacies-row">
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div>
          {/* <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div> */}
        </div>
        <Link to='/ambiencegallery'>
        <button type="button" className="btn btn-secondary">More</button>
        </Link>
          
      </section>
      {/*Food Gallery*/}
      <section className="delicacies">
        <h2> Our Food</h2>
       
        <div className="row delicacies-row">
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div>
          {/* <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div> */}
        </div>
        <Link to='/foodgallery'>
        <button type="button" className="btn btn-secondary">More</button>
        </Link>
          
      </section>
      {/*Other Photos*/}
      <section className="delicacies">
        <h2>Videos</h2>
       
        <div className="row delicacies-row">
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div>
          {/* <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            
          </div> */}
        </div>
        <Link to='/foodgallery'>
        <button type="button" className="btn btn-secondary">More</button>
        </Link>
          
      </section>
 </div>
  </>
   
  )
}

export default gallery
