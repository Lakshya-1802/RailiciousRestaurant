import './App.css';
import Nav from "./Navbar/nav"
// import { Route, Routes } from 'react-router-dom';
import Footer from "./Footer/Footer"
import Reservation from './Reservation/Reservation'
import Home from "./Home/Home"
import Menu from "./Menu/Menu"
import Gallery from "./Gallery/gallery"
import Catering from './Catering/catering'
import About from "./About/about"
import Contact from './Contact/contact'
import Franchise from './Franch/franch'
import FoodGallery from './Gallery/food'
import AmbienceGallery from './Gallery/ambience'
import VideoGallery from './Gallery/videosgallery'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login/Login';
import Siginin from './Createaccount/Signin';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
     <Routes>
    <Route path="/" element={ <Home/> }/>
    <Route path="/reservation" element={ <Reservation/>}/>
    <Route path="/menu" element={ <Menu/>}/>
    <Route path="/signup" element={ <Login/>}/>
    <Route path="/signin" element={ <Siginin/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path='/gallery' element = {<Gallery />}/>
    <Route path='/catering' element = {<Catering />}/>
    <Route path='/contact' element = {<Franchise/>}/>
    <Route path='/foodgallery' element={<FoodGallery/>}/>
    <Route path='/ambiencegallery' element={<AmbienceGallery/>}/>
    <Route path='/videogallery' element={<VideoGallery/>}/>
      </Routes>
      <Footer/>
  </BrowserRouter>
     </> 
    
  );
}

export default App;
