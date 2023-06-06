import React, { useRef } from 'react';
import "./gallery.css"
// import A1 from '../Images/Galleryimg/Gallerypage/A1.jpg'
// import A2 from '../Images/Galleryimg/Gallerypage/A2.jpg'
// import A3 from '../Images/Galleryimg/Gallerypage/A3.jpg'
// import F1 from '../Images/Delicacies/veg (2).jpg'
// import F2 from '../Images/Delicacies/sizzler.jpg'
// import F3 from '../Images/Delicacies/pizza.jpg'
// import V1 from '../Images/Galleryimg/Videosgallery/video1.mp4'
// import V2 from '../Images/Galleryimg/Videosgallery/video2.mp4'
// import V3 from '../Images/Galleryimg/Videosgallery/video3.mp4'


import { Link } from 'react-router-dom'


const Gallery = () => {
  const ambience = [
    { id: 1, img: "/Images/Galleryimg/Gallerypage/A1.jpg" },
    { id: 2, img: "/Images/Galleryimg/Gallerypage/A2.jpg" },
    { id: 3, img: "/Images/Galleryimg/Gallerypage/A3.jpg" },
  ]
  const food = [
    { id: 1, img: "/Images/Delicacies/veg (2).jpg" },
    { id: 2, img: "/Images/Delicacies/sizzler.jpg" },
    { id: 3, img: "/Images/Delicacies/pizza.jpg" },
  ]
  const videos = [
    { id: 1, vid: "/Images/Galleryimg/Videosgallery/video1.mp4" },
    { id: 2, vid: "/Images/Galleryimg/Videosgallery/video2.mp4" },
    { id: 3, vid: "/Images/Galleryimg/Videosgallery/video3.mp4" },
  ]

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
            {
              ambience.map((image) => (
                <div className="col-sm-6 col-md-4 delicacy">
                  <img src={image.img} alt="Delicacy 1" />
                </div>
              ))
            }

          </div>
          <Link to='/ambiencegallery'>
            <button type="button" className="btn btn-secondary">More</button>
          </Link>

        </section>
        {/*Food Gallery*/}
        <section className="delicacies">
          <h2> Our Food</h2>

          <div className="row delicacies-row">
          {
              food.map((img) => (
                <div className="col-sm-6 col-md-4 delicacy">
                  <img src={img.img} alt="Delicacy 1" />
                </div>
              ))
            }
            
          </div>
          <Link to='/foodgallery'>
            <button type="button" className="btn btn-secondary">More</button>
          </Link>

        </section>
        {/*Video gallery*/}
        <section className="delicacies">
          <h2>Videos</h2>

          <div className="row delicacies-row">
          {
              videos.map((video) => (
                <div onMouseEnter={() => handleMouseEnter(videoRef1)} onMouseLeave={() => handleMouseLeave(videoRef1)} className="col-sm-6 col-md-4 delicacy" >
              <video ref={videoRef1} className='video' width="216" height="384"  >
                <source src={video.vid} type="video/mp4" />
              </video>
            </div>
                
              ))
            }

            


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
