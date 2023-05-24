import React from 'react'
import img from './about.jpeg'
import video from './video.mp4'
import './about.css'
const about = () => {
  return (
    <div>
      <section className="about-us">
  <div className="container">
    <div className='text-center'><h1>About us <hr /></h1> </div>
    <div className="row">
      <div className="col-md-6">
        {/* <img src={img} alt="About Us Image"/> */}
        <video  autoPlay loop muted>
  <source src={video} type="video/mp4"/>
</video>
      </div>
      <div className="col-md-6">
        <h2>Railicious</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et luctus velit, sed iaculis nisi. Nulla facilisi. Sed at elit massa. Morbi id cursus nisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et luctus velit, sed iaculis nisi. Nulla facilisi. Sed at elit massa. Morbi id cursus nisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et luctus velit, sed iaculis nisi. Nulla facilisi. Sed at elit massa. Morbi id cursus nisi.
            </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default about
