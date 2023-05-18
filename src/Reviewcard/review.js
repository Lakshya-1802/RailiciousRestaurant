import React from 'react'
import './review.css'
import img1 from './set_1.jpg'




const review = () => {
  return (
    
<div className="testimonial-slider">
    <div id="carouselExampleControls" className="carousel carousel-dark" data-bs-ride="carousel">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="testimonial-title">
                        <i className="bi bi-quote display-2"></i>
                        <h2 className="fw-bold display-6">What our customers say</h2>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="col-md-8">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card">
                                <div className="img-wrapper"><img src={img1} className="d-block w-100" alt="..."/> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title 1</h5>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <p className="card-text">"Some dummy text you don't need to read. Since you have decided to read, do like, share, comment and subscribe to Coding Yaar."</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <div className="img-wrapper"><img src={img1} className="d-block w-100" alt="..."/> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title 2</h5>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <p className="card-text">"Some dummy text you don't need to read. Since you have decided to read, do like, share, comment and subscribe to Coding Yaar."</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <div className="img-wrapper"><img src={img1} className="d-block w-100" alt="..."/> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title 3</h5>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <p className="card-text">"Some dummy text you don't need to read. Since you have decided to read, do like, share, comment and subscribe to Coding Yaar."</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <div className="img-wrapper"><img src={img1} className="d-block w-100" alt="..."/> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title 4</h5>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <p className="card-text">"Some dummy text you don't need to read. Since you have decided to read, do like, share, comment and subscribe to Coding Yaar."</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <div className="img-wrapper"><img src={img1} className="d-block w-100" alt="..."/> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title 5</h5>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <p className="card-text">"Some dummy text you don't need to read. Since you have decided to read, do like, share, comment and subscribe to Coding Yaar."</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card">
                                <div className="img-wrapper"><img src={img1} className="d-block w-100" alt="..."/> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title 6</h5>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <i className="bi bi-star-fill text-warning pe-1"></i>
                                    <p className="card-text">"Some dummy text you don't need to read. Since you have decided to read, do like, share, comment and subscribe to Coding Yaar."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    
    
  )
}

export default review
