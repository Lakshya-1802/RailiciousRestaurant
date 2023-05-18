import './App.css';
import Nav from "./Navbar/nav"
// import { Route, Routes } from 'react-router-dom';
import Footer from "./Footer/Footer"
import Reservation from './Reservation/Reservation'
import Home from "./Home/Home"
import Menu from "./Menu/Menu"
import About from "./About/about"
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
    {/* <Route path='/about' element = {<About/>}/> */}

      </Routes>
      <Footer/>
  </BrowserRouter>
     </> 
    
  );
}

export default App;
