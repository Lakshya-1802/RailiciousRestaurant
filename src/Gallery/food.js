import React from 'react'
import './food.css'
import img1 from "../Images/Galleryimg/Foodgallery/Food1.jpg"
import img2 from "../Images/Galleryimg/Foodgallery/Food2.jpg"
import img3 from "../Images/Galleryimg/Foodgallery/Food3.jpg"
import img4 from "../Images/Galleryimg/Foodgallery/Food4.jpg"
import img5 from "../Images/Galleryimg/Foodgallery/Food5.jpg"
import img6 from "../Images/Galleryimg/Foodgallery/Food6.jpg"
import img7 from "../Images/Galleryimg/Foodgallery/Food7.jpg"
import img8 from "../Images/Galleryimg/Foodgallery/Food8.jpg"
import img9 from "../Images/Galleryimg/Foodgallery/Food9.jpg"
import img10 from "../Images/Galleryimg/Foodgallery/Food10.jpg"
import img11 from "../Images/Galleryimg/Foodgallery/Food11.jpg"
import img12 from "../Images/Galleryimg/Foodgallery/Food12.jpg"
import img13 from "../Images/Galleryimg/Foodgallery/Food13.jpg"
import img14 from "../Images/Galleryimg/Foodgallery/Food14.jpg"
import img15 from "../Images/Galleryimg/Foodgallery/Food15.jpg"
import img16 from "../Images/Galleryimg/Foodgallery/Food16.jpg"


const food = () => {
  return (
    <div className="container-fluid">
    <div ><h1 className='text-center'>Food</h1><hr/></div>
  <div className="row">
    <div className="column">
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <img src={img4} />
      
    </div>
    <div className="column">
      <img src={img5} />
      <img src={img6} />
      <img src={img7} />
      <img src={img8} />
      
    </div>
    <div className="column">
      <img src={img9} />
      <img src={img10} />
      <img src={img11} />
      <img src={img12} />
      
    </div>
    <div className="column">
      <img src={img13} />
      <img src={img14} />
      <img src={img15} />
      <img src={img16} />
      
    </div>
    
  </div>
</div>
  )
}

export default food
