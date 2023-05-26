import React, { useRef } from 'react';
import "./gallery.css"
import A1 from '../Images/Galleryimg/Gallerypage/A1.jpg'
import A2 from '../Images/Galleryimg/Gallerypage/A2.jpg'
import A3 from '../Images/Galleryimg/Gallerypage/A3.jpg'
import F1 from '../Images/Delicacies/veg (2).jpg'
import F2 from '../Images/Delicacies/sizzler.jpg'
import F3 from '../Images/Delicacies/pizza.jpg'
import V1 from '../Images/Galleryimg/Videosgallery/video1.mp4'
import V2 from '../Images/Galleryimg/Videosgallery/video2.mp4'
import V3 from '../Images/Galleryimg/Videosgallery/video3.mp4'


import { Link } from 'react-router-dom'


const Gallery = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };


  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };
  return (

    <>
      <div ><h1 className='text-center'>Check Out Our Gallery </h1><hr /></div>
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
        {/*Video gallery*/}
        <section className="delicacies">
          <h2>Videos</h2>

          <div className="row delicacies-row">
            <div onMouseEnter={() => handleMouseEnter(videoRef1)} onMouseLeave={() => handleMouseLeave(videoRef1)} className="col-sm-6 col-md-4 delicacy" >
              <video ref={videoRef1} className='video' width="216" height="384"  >
                <source src={V1} type="video/mp4" />
              </video>
            </div>
            <div onMouseEnter={() => handleMouseEnter(videoRef2)} onMouseLeave={() => handleMouseLeave(videoRef2)} className="col-sm-6 col-md-4 delicacy" >
              <video ref={videoRef2} className='video' width="216" height="384"  >
                <source src={V2} type="video/mp4" />
              </video>
            </div>
            <div onMouseEnter={() => handleMouseEnter(videoRef3)} onMouseLeave={() => handleMouseLeave(videoRef3)} className="col-sm-6 col-md-4 delicacy" >
              <video ref={videoRef3} className='video' width="216" height="384"  >
                <source src={V3} type="video/mp4" />
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

export default Gallery
