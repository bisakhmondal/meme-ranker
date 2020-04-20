import React from 'react';
import 'tachyons';
import './nav.css'
import { Link } from "react-router-dom";
const Navigation=()=>{

    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-5 pa0">
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link style={{ textDecoration: 'none' }} to='/' ><p className=" ffff nav-link pa2 f3 black" >Navbar</p></Link>
        
         <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
             <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
             <li className="nav-item active">
              <Link style={{ textDecoration: 'none' }} to='/' > <p className="nav-link dim">Home <span className="sr-only">(current)</span> </p></Link>
              </li>
              <li className="nav-item">
              <Link style={{ textDecoration: 'none' }} to='/about' > <p className="nav-link">About</p></Link>
              </li>
              <li className="nav-item">
              <Link style={{ textDecoration: 'none' }} to='/ranking' > <p className="nav-link" >Rank</p></Link>
              </li>

            </ul> 
            <div className="form-inline my-2 my-lg-0 pa0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="f6 dib white bg-blue bttn hover-bg-white hover-blue no-underline pv2 ph4 br-pill ba b--yellow-20" type="submit">Search</button>
            </div>
          </div>
         </div>
    )
}
export default Navigation;