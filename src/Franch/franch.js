import React from 'react'
import './franch.css'
import img from '../Images/franchise.jpg'
const franch = () => {
    return (
        <div>
            <div className='text-center'><h1> Franchise</h1><hr/></div>
            <div className='text-center'>
                <h2>Why Choose us </h2>
                <p>
                Welcome to our railway-themed restaurant, where nostalgia meets culinary excellence. Immerse yourself in the charm of a vintage railway station as you indulge in our carefully curated menu. From classic railway-inspired dishes to innovative culinary creations, our chefs deliver an exceptional dining experience. With impeccable service and a unique ambiance that recreates the golden era of railways, every visit is a journey through time. Whether you're celebrating a special occasion or simply seeking a one-of-a-kind dining adventure, join us at [Restaurant Name] and create lasting memories in a setting that blends the magic of trains with exceptional gastronomy.
                </p>
            </div>
          <div class="container content mt-5" >
                <div class="row margin-bottom-30">                
                    <div class="col-md-6 " >
                        <img src={img} style={{width:"100%",paddingBottom:"15px"}} />
                    </div>
                    <div class="col-md-6 mb-margin-bottom-25 mr-5px" >
                        <h2 className='text-center' style={{color:"brown"}}>Get a Franchise Now</h2>
                        <form>
                            <div class="mb-3 text-start">
                                {/* <label for="name" class="form-label  mt-2" >Enter your name</label> */}
                                <input type="text" class="form-control" id="name" placeholder='Name' name="name" />
                            </div>
                            <div class="mb-3 text-start">

                                <input type="number" class="form-control" id="number" placeholder='Contact Number' name="number" />
                            </div>
                            <div class="mb-3 text-start">
                                {/* <label for="email" class="form-label  " >Enter your email Address</label> */}
                                <input type="email" class="form-control" id="email" name="email" placeholder='Enter your email Address' aria-describedby="emailHelp" />
                                {/* <div id="emailHelp" class="form-text" style={{color:"#e88c04"}}>We'll never share your email with anyone else.</div> */}
                            </div>
                            <div class="mb-3 text-start">
                                {/* <label for="name" class="form-label  mt-2" >Enter your name</label> */}
                                <input type="text" class="form-control" id="name" placeholder='Where do you want Railicios outlet? ' name="name" />
                            </div>
                            <div class="mb-3 text-start">
                                {/* <label for="msg" class="form-label  " >Enter your message</label> */}
                                <textarea class="form-control  " name="msg" id="msg" placeholder='Enter your message' cols="30" rows="3" style={{ marginLeft: "12px" }} ></textarea>

                            </div>
                            <button type="submit" class="btn btn-success text-start mb-2" style={{ marginLeft: "12px" }} >Submit</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default franch
