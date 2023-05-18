import React from 'react'
import "./nav.css"
import logo from "./RALICIOUS_LOGO-removebg-preview.png"
import { Link } from 'react-router-dom'
const nav = () => {
  return (
    

    <div className='header ' style={{backgroundColor:"rgba(0,0,0,0.2)"}} >
      <nav className="navbar navbar-expand-md  ">
  <div className=" container-fluid">
    <a className="navbar-brand d-md-none" href="#">
      <img src={logo} alt=""/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav mx-auto" style={{fontWeight:"bold",fontSize:"1rem"}}>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <a className="navbar-brand d-none d-md-block" href="#">
          <img src={logo} alt=""/>
        </a>
        <li className="nav-item">
          <Link className="nav-link active" to="/reservation"> Reservation</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Catering</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active">Contact</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" to="/signin"> Creat account</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/signup">Sign up</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

 </div>



  )
}

export default nav

