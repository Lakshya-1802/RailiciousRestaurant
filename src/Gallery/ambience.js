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
  return (
    <div className="container-fluid">
    <div ><h1 className='text-center'>Ambience </h1><hr/></div>
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
