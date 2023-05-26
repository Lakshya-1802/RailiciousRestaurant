import React from 'react'
import './franch.css'
import img from './franchise.jpg'
const franch = () => {
    return (
        <div>
            <div className='text-center'><h1> Franchise</h1><hr/></div>
            <div className='' style={{margin:"0 10px"}}>
                <h2>Why Choose us </h2>
                <p>
                Welcome to our railway-themed restaurant, where nostalgia meets culinary excellence. Immerse yourself in the charm of a vintage railway station as you indulge in our carefully curated menu. From classic railway-inspired dishes to innovative culinary creations, our chefs deliver an exceptional dining experience.
                </p>
            </div>
          <div className="container content mt-5" >
                <div className="row margin-bottom-30">                
                    <div className="col-md-6 " >
                        <img src={img} style={{width:"100%",paddingBottom:"15px"}} />
                    </div>
                    <div className="col-md-6 mb-margin-bottom-25 mr-5px" >
                        <h2 className='text-center' style={{color:"brown"}}>Get a Franchise Now</h2>
                        <form>
                            <div className="mb-3 text-start">
                                <input type="text" className="form-control" id="name" placeholder='Name' name="name" />
                            </div>
                            <div className="mb-3 text-start">

                                <input type="text" className="form-control" id="number" placeholder='Contact Number' name="number" />
                            </div>
                            <div className="mb-3 text-start">
                                <input type="email" className="form-control" id="email" name="email" placeholder='Enter your email Address' aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 text-start">
                                <input type="text" className="form-control" id="name" placeholder='Where do you want Railicios outlet? ' name="name" />
                            </div>
                            <div className="mb-3 text-start">
                                <textarea className="form-control  " name="msg" id="msg" placeholder='Enter your message' cols="30" rows="3" style={{ marginLeft: "12px" }} ></textarea>

                            </div>
                            <button type="submit" className="btn btn-success text-start mb-2" style={{ marginLeft: "12px" }} >Submit</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default franch
