import React from 'react'
import "./Home.css"

import back from '../Images/HomeHeader.jpg'
import img1 from '../Images/Galleryimg/4.jpg'

import veg from '../Images/Delicacies/Veg.jpg'
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
const Home = () => {
  return (
    <div >
      {/* HomeHeader */}
      <div className=" mx-0 " style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${back})`,
        backgroundSize: "cover",
        maxWidth: "100%",
        backgroundAttachment: "fixed",
        backgroundPosition:" center cente",
        
      }}>
        <div className="rotating-text-wrapper">
          <h2>Welcome to Railicious</h2>
          <h2>A unique train theme based restaurant</h2>
          <h2>Join us on a journey of delicious food </h2>
        </div>
      </div>

      {/* our delicacies    */}
      <section className="delicacies">
        <h2>Our Delicacies</h2>
        <hr />
        <div className="row delicacies-row">
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={veg} alt="Delicacy 1" />
            <h3>Veg</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            <h3>Beverages</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={veg} alt="Delicacy 1" />
            <h3>Dessserts</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            <h3>Snacks</h3>
          </div>



        </div>
      </section>
      {/* Our Cuisine */}
      <section className="delicacies">
        <h2>Our Cuisines</h2>
        <hr />
        <div className="row delicacies-row">
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={veg} alt="Delicacy 1" />
            <h3>Veg</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            <h3>Beverages</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={veg} alt="Delicacy 1" />
            <h3>Dessserts</h3>
          </div>
          



        </div>
        <div className="row delicacies-row">
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={veg} alt="Delicacy 1" />
            <h3>Veg</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={img1} alt="Delicacy 1" />
            <h3>Beverages</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={veg} alt="Delicacy 1" />
            <h3>Dessserts</h3>
          </div>
         



        </div>
      </section>

    </div>
  )
}

export default Home
