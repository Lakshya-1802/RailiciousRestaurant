import React from 'react'
import './ambience.css'
import img1 from "../Images/Galleryimg/Ambiencegallery/ambience1.jpg"
import img2 from "../Images/Galleryimg/Ambiencegallery/ambience2.jpg"
import img3 from "../Images/Galleryimg/Ambiencegallery/ambience3.jpg"
import img4 from "../Images/Galleryimg/Ambiencegallery/ambience4.jpg"
import img5 from "../Images/Galleryimg/Ambiencegallery/ambience5.jpg"
import img6 from "../Images/Galleryimg/Ambiencegallery/ambience6.jpg"
import img7 from "../Images/Galleryimg/Ambiencegallery/ambience7.jpg"
import img8 from "../Images/Galleryimg/Ambiencegallery/ambience8.jpg"
import img9 from "../Images/Galleryimg/Ambiencegallery/ambience9.jpg"
import img10 from "../Images/Galleryimg/Ambiencegallery/ambience10.jpg"
import img11 from "../Images/Galleryimg/Ambiencegallery/ambience11.jpg"
import img12 from "../Images/Galleryimg/Ambiencegallery/ambience12.jpg"
const ambience = () => {
  const ambience = [
    { id: 1, img: "/Images/Galleryimg/Ambiencegallery/ambience1.jpg" },
    { id: 2, img: "/Images/Galleryimg/Ambiencegallery/ambience2.jpg" },
    { id: 3, img: "/Images/Galleryimg/Ambiencegallery/ambience3.jpg" },
    { id: 4, img: "/Images/Galleryimg/Ambiencegallery/ambience4.jpg" },
    { id: 5, img: "/Images/Galleryimg/Ambiencegallery/ambience5.jpg" },
    { id: 6, img: "/Images/Galleryimg/Ambiencegallery/ambience6.jpg" },
    { id: 7, img: "/Images/Galleryimg/Ambiencegallery/ambience7.jpg" },
    { id: 8, img: "/Images/Galleryimg/Ambiencegallery/ambience8.jpg" },
    { id: 9, img: "/Images/Galleryimg/Ambiencegallery/ambience9.jpg" },
    { id: 10, img: "/Images/Galleryimg/Ambiencegallery/ambience10.jpg" },
    { id: 11, img: "/Images/Galleryimg/Ambiencegallery/ambience11.jpg" },
    { id: 12, img: "/Images/Galleryimg/Ambiencegallery/ambience12.jpg" }
  ]
  return (
    <div className="container-fluid">
      <div ><h1 className='text-center'>Ambience </h1><hr /></div>
      <div className="row">
        <div className="column">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
        </div>
        <div className="column">
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
        </div>
        <div className="column">
          <img src={img7} />
          <img src={img8} />
          <img src={img9} />
        </div>
        <div className="column">
          <img src={img10} />
          <img src={img11} />
          <img src={img12} />
        </div>
      </div>
    </div>
  )
}

export default ambience
