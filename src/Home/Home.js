import React from 'react'
import "./Home.css"
import Review from '../Reviewcard/review'
import Gallery from "../Gallery/gallery"
import back from '../Images/HomeHeader.jpg'
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

const Home = () => {
  return (
    <div >
      {/* HomeHeader */}
       <div className=" mx-0 " style={{
         backgroundImage: `url(${back})`,
         backgroundSize:"cover",
         maxWidth:"100%",
         
                            }}>
                <div className="rotating-text-wrapper">
    <h2>Welcome to Railicious</h2>
    <h2>A unique train theme based restaurant</h2>
    <h2>Join us on a journey of delicious food </h2>
</div>
            </div>

      {/* <Slider /> */}
      <Gallery />
      <Review />
    </div>
  )
}

export default Home
