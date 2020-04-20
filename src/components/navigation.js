import React from 'react';
import 'tachyons';
import './nav.css'
const Navigation=()=>{

    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-5">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand " href="#">Navbar</a>
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link dim" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Rank</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="f6 dib white bg-blue bttn hover-bg-white hover-blue no-underline pv2 ph4 br-pill ba b--yellow-20" type="submit">Search</button>
            </div>
          </div>
        </div>
    )
}
export default Navigation;