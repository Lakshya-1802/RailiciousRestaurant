import React from 'react'
import './otherphoto.css'
import img1 from "../Images/Galleryimg/1.jpg"
import img2 from "../Images/Galleryimg/1.jpg"
import img3 from "../Images/Galleryimg/3.jpg"
import img4 from "../Images/Galleryimg/4.jpg"
import img5 from "../Images/Galleryimg/1.jpg"
const otherphotos = () => {
  return (
    <div className="container-fluid">
    <div ><h1 className='text-center'>Guests</h1><hr/></div>
  <div className="row">
    <div className="column">
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <img src={img4} />
      <img src={img5} />
    </div>
    <div className="column">
      <img src={img2} />
      <img src={img1} />
      <img src={img5} />
      <img src={img4} />
      <img src={img3} />
    </div>
    <div className="column">
      <img src={img3} />
      <img src={img1} />
      <img src={img4} />
      <img src={img5} />
      <img src={img2} />
    </div>
    <div className="column">
      <img src={img3} />
      <img src={img1} />
      <img src={img4} />
      <img src={img5} />
      <img src={img2} />
    </div>
    
  </div>
</div>
  )
}

export default otherphotos
