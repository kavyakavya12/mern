import logo from './logo.svg';
import g from './Components/images/f1.jpg';
import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar'; 
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import Artists from './Components/Artists';
import Venue from './Components/Venue';
import Catering from './Components/Catering';
import Aboutus from './Components/Aboutus';
import Booking from './Components/Booking';
import Goto from './Components/Goto';
import Artistss from './Components/Artistss';
import Artistsd from './Components/Artistsd';
import Artistsc from './Components/Artistsc';
import Artistsstand from './Components/Artistsstand';
import Artistsb from './Components/Artistsb';
import Artistsanchor from './Components/Artistsanchor';
import Artistsmagian from './Components/Artistsmagian';
import Pay from './Components/Pay';
import a from './Components/images/a.jpg';
import f from './Components/images/f.jpg';
import v from './Components/images/v.jpg';
import z from './Components/images/rm.jpg';
import Payment from './Components/Payment';
import Help from './Components/Help';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { BrowserRouter } from "react-router-dom";
import HeHead from './Components/HeHead';
import FeForm from './Components/FeForm';
import Submissions from './Components/Submissions';

function App() {
  
  

  return (
    <div className="App">
     
     
    
     
    <Routes> 
    
    <Route path="submissions" element={<Submissions />} />
    <Route path="/Submissions" element={<Submissions />} />
        <Route path="submission/:id" element={<Submissions />} />
    <Route path='/Goto' element={<Goto/>}/>
    <Route path='FeForm' element={<FeForm/>}/>
    <Route path='Register' element={<Register/>}/>
    <Route path='Cart' element={<Cart/>}/>
    <Route path='Artists' element={<Artists/>}/>
    <Route path='Venue' element={<Venue/>}/>
    <Route path='Catering' element={<Catering/>}/>
    <Route path='Help' element={<Help/>}/>
    <Route path='Aboutus' element={<Aboutus/>}/>
    <Route path='Booking' element={<Booking/>}/>
    <Route path='/book' element={<Booking/>}/>
    <Route path='/cater' element={<Catering/>}/>
    <Route path='Payment' element={<Payment/>}/>
    <Route path='Pay' element={<Pay/>}/>
    <Route path='/dance' element={<Artistsd/>}/>
    <Route path='/sing' element={<Artistss/>}/>
    <Route path='/com' element={<Artistsc/>}/>
    <Route path='/stc' element={<Artistsstand/>}/>
    <Route path='/mb' element={<Artistsb/>}/>
    <Route path='/ac' element={<Artistsanchor/>}/>
    <Route path='/artis' element={<Artists/>}/>
    <Route path='/cater' element={<Catering/>}/>
    <Route path='/book' element={<Booking/>}/>
    <Route path='/ven' element={<Venue/>}/>
    <Route path='/mc' element={<Artistsmagian/>}/>
     </Routes> 
     
    
    
     <Navbar></Navbar>
     <h1> ENTERTAINMENT MANAGEMENT SYSTEM </h1>
     <Login></Login>
     <img src={z} width="850" height="450"/>
     <Link to="/book"><h1> BOOKING </h1> </Link>
     <h2> This website is about Entertainment Management System, in which you<br></br> can book and manage your event
band, catering service, and venue<br></br> all at the same time.
As an entertainment provider,<br></br> you are well aware of the myriad of things you need to keep in mind
<br></br>in order to organize the perfect event, and that’s where our software<br></br>
can provide organization for all your tasks.</h2>
<h3> YOU CAN BOOK YOUR ARTISTS </h3>
<img src={a} width="350" height="350"/>
<centre>
<Link to="/artis"><h1> ARTISTS</h1> </Link></centre>
<h3> YOU CAN BOOK YOUR FOOD </h3>
<img src={f} width="350" height="350"/>
<centre> <Link to="/cater"><h1> CATERING </h1> </Link></centre>
<h3> YOU CAN BOOK YOUR VENUES </h3>
<img src={v} width="350" height="350"/>
<centre> <Link to="/ven"><h1> VENUES </h1> </Link></centre>
     <h1> Get In Touch </h1>
     <h1> Contact Us </h1>
     <h2> We would like to hear from you. </h2>

     <h2> BHAVIGNA REDDY</h2>
     <h2> + 91 8187886688 </h2>
     <h3> bhavignareddy2003@gmail.com</h3>

    <h2> KAVYA S </h2>
     <h2> + 91 9014554075 </h2>
     <h3> seemalakavya39@gmail.com</h3>

     <h2> MADHURI N </h2>
     <h2> + 91 7207814639 </h2>
     <h3> narlapatimadhuri@gmail.com</h3>

    </div>
  );
}

export default App;
