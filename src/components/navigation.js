import React from 'react';
import 'tachyons';
import './nav.css'
import { Link } from "react-router-dom";
const Navigation=({sip})=>{

    return(
        <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-5">
          <Link style={{ textDecoration: 'none' }} to='/' ><p className=" navbar-brand f3" ><b>S</b>urvello</p></Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
             <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
             <li className="nav-item active">
              <Link style={{ textDecoration: 'none' }} to='/' > <p className="nav-link">Home <span className="sr-only">(current)</span> </p></Link>
              </li>
              <li className="nav-item">
              <Link style={{ textDecoration: 'none' }} to='/about' > <p className="nav-link">About</p></Link>
              </li>
              <li className="nav-item">
              <Link style={{ textDecoration: 'none' }} to='/ranking' > <p className="nav-link" >Rank</p></Link>
              </li>
              
            </ul> 
            <div className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={e=>sip(e.target.value)} />
            </div>
          </div>
         </div>
    )
}
export default Navigation;