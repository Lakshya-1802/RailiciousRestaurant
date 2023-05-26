import React from 'react'
import './videosgallery.css'
import V1 from '../Images/Galleryimg/Videosgallery/video1.mp4'
import V2 from '../Images/Galleryimg/Videosgallery/video2.mp4'
import V3 from '../Images/Galleryimg/Videosgallery/video3.mp4'
import V4 from '../Images/Galleryimg/Videosgallery/video4.mp4'
import V5 from '../Images/Galleryimg/Videosgallery/video5.mp4'
import V6 from '../Images/Galleryimg/Videosgallery/video6.mp4'
import V7 from '../Images/Galleryimg/Videosgallery/video7.mp4'
import V8 from '../Images/Galleryimg/Videosgallery/video8.mp4'
import V9 from '../Images/Galleryimg/Videosgallery/video9.mp4'
const otherphotos = () => {
  return (
    <section className="delicacies">
      <h2>Videos</h2>
      <hr/>

      <div className="row delicacies-row">
        <div className="col-sm-6 col-md-4 delicacy" >
          <video className='video' width="216" height="384" controls  >
            <source src={V1} type="video/mp4" />
          </video>
        </div>
        <div className="col-sm-6 col-md-4 delicacy">
          <video className='video' width="216" height="384" controls >
            <source src={V2} type="video/mp4" />
          </video>

        </div>
        <div className="col-sm-6 col-md-4 delicacy">
          <video className='video' width="216" height="384" controls >
            <source src={V3} type="video/mp4" />
          </video>

        </div>
        <div className="col-sm-6 col-md-4 delicacy">
          <video className='video' width="216" height="384" controls >
            <source src={V4} type="video/mp4" />
          </video>

        </div>

      </div>
      <div className="row delicacies-row">
        <div className="col-sm-6 col-md-4 delicacy" >
          <video className='video' width="216" height="384" controls  >
            <source src={V8} type="video/mp4" />
          </video>
        </div>
        <div className="col-sm-6 col-md-4 delicacy">
          <video className='video' width="216" height="384" controls >
            <source src={V5} type="video/mp4" />
          </video>

        </div>
        <div className="col-sm-6 col-md-4 delicacy">
          <video className='video' width="216" height="384" controls >
            <source src={V6} type="video/mp4" />
          </video>

        </div>
        <div className="col-sm-6 col-md-4 delicacy">
          <video className='video' width="216" height="384" controls >
            <source src={V7} type="video/mp4" />
          </video>

        </div>

      </div>
     


    </section>
  )
}

export default otherphotos
