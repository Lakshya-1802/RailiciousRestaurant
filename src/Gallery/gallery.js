import React from 'react'
import "./gallery.css"
import A1 from '../Images/Galleryimg/Gallerypage/A1.jpg'
import A2 from '../Images/Galleryimg/Gallerypage/A2.jpg'
import A3 from '../Images/Galleryimg/Gallerypage/A3.jpg'
import F1 from '../Images/Delicacies/veg (2).jpg'
import F2 from '../Images/Delicacies/sizzler.jpg'
import F3 from '../Images/Delicacies/pizza.jpg'
import V1 from '../Images/Galleryimg/Others/video1.mp4'
import V2 from '../Images/Galleryimg/Others/video2.mp4'
import V3 from '../Images/Galleryimg/Others/video3.mp4'


import {Link} from 'react-router-dom'

// let clip = document.querySelector(".video")
  
        
//         clip.addEventListener("mouseover", function (e) {
//             clip.play();
//         })
  
//         clip.addEventListener("mouseout", function (e) {
//             clip.pause();
//         })

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
            <img src={A1} alt="Delicacy 1" />
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={A2} alt="Delicacy 1" />
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={A3} alt="Delicacy 1" />
            
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
            <img src={F1} alt="Delicacy 1" />
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={F2} alt="Delicacy 1" />
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={F3} alt="Delicacy 1" />
            
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
          <div className="col-sm-6 col-md-4 delicacy" >
          <video className='video' width="216" height="384"  >
  <source src={V1} type="video/mp4"/>
           </video>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
          <video className='video' width="216" height="384" >
  <source src={V2} type="video/mp4"/>
           </video>
           
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
          <video className='video' width="216" height="384" >
  <source src={V3} type="video/mp4"/>
           </video>
            
          </div>
          
        </div>
        <Link to='/videogallery'>
        <button type="button" className="btn btn-secondary">More</button>
        </Link>
          
      </section>
 </div>
  </>
   
  )
}

export default gallery
