import React, { useRef } from 'react';
import './videosgallery.css'
import V1 from '../Images/Galleryimg/Videosgallery/video1.mp4'
import V2 from '../Images/Galleryimg/Videosgallery/video2.mp4'
import V3 from '../Images/Galleryimg/Videosgallery/video3.mp4'
import V4 from '../Images/Galleryimg/Videosgallery/video4.mp4'
import V5 from '../Images/Galleryimg/Videosgallery/video5.mp4'
import V6 from '../Images/Galleryimg/Videosgallery/video6.mp4'
import V7 from '../Images/Galleryimg/Videosgallery/video7.mp4'
import V8 from '../Images/Galleryimg/Videosgallery/video8.mp4'

const Videosgallery = () => {
  const Videos = [
    { id:1,img: "/Images/Galleryimg/Videosgallery/videos1.jpg"},
    { id:2,img: "/Images/Galleryimg/Videosgallery/videos2.jpg"},
    { id:3,img: "/Images/Galleryimg/Videosgallery/videos3.jpg"},
    { id:4,img: "/Images/Galleryimg/Videosgallery/videos4.jpg"},
    { id:5,img: "/Images/Galleryimg/Videosgallery/videos5.jpg"},
    { id:6,img: "/Images/Galleryimg/Videosgallery/videos6.jpg"},
    { id:7,img: "/Images/Galleryimg/Videosgallery/videos7.jpg"},
    { id:8,img: "/Images/Galleryimg/Videosgallery/videos8.jpg"}
    ]

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };


  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <section className="delicacies">
      <h2>Videos</h2>
      <hr/>

      <div className="row delicacies-row">
        <div onMouseEnter={() => handleMouseEnter(videoRef1)} onMouseLeave={() => handleMouseLeave(videoRef1)}  className="col-sm-6 col-md-4 delicacy" >
          <video ref={videoRef1} className='video' width="216" height="384"    >
            <source src={V1} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef2)} onMouseLeave={() => handleMouseLeave(videoRef2)}  className="col-sm-6 col-md-4 delicacy" >
          <video ref={videoRef2} className='video' width="216" height="384"    >
            <source src={V2} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef3)} onMouseLeave={() => handleMouseLeave(videoRef3)}  className="col-sm-6 col-md-4 delicacy" >
          <video ref={videoRef3} className='video' width="216" height="384"    >
            <source src={V3} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef4)} onMouseLeave={() => handleMouseLeave(videoRef4)}  className="col-sm-6 col-md-4 delicacy" >
          <video ref={videoRef4} className='video' width="216" height="384"    >
            <source src={V4} type="video/mp4" />
          </video>
        </div>

      </div>
      <div className="row delicacies-row">
        <div onMouseEnter={() => handleMouseEnter(videoRef5)} onMouseLeave={() => handleMouseLeave(videoRef5)}  className="col-sm-6 col-md-4 delicacy" >
          <video ref={videoRef5} className='video' width="216" height="384"    >
            <source src={V5} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef6)} onMouseLeave={() => handleMouseLeave(videoRef6)}  className="col-sm-6 col-md-4 delicacy" >
          <video ref={videoRef6} className='video' width="216" height="384"    >
            <source src={V6} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef7)} onMouseLeave={() => handleMouseLeave(videoRef7)}  className="col-sm-6 col-md-4 delicacy" >
          <video ref={videoRef7} className='video' width="216" height="384"    >
            <source src={V7} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef8)} onMouseLeave={() => handleMouseLeave(videoRef8)}  className="col-sm-6 col-md-4 delicacy" >
          <video ref={videoRef8} className='video' width="216" height="384"    >
            <source src={V8} type="video/mp4" />
          </video>
        </div>

      </div>
     
     


    </section>
  )
}

export default Videosgallery
