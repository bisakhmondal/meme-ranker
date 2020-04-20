import React from 'react';
import Background from './bg.jpg';
import './about.css'
const About=()=>{
    return (
        <div>
        <div className= 'bgg' style={{backgroundImage: `url(${Background})`,width: "100%",height: "800px",backgroundRepeat:"no-repeat"}} />
         <div className="jumbotron jjj">
        <div class="container pa2 ">
          <h1 class="display-2 f2 ">{`Hi! Bisakh Here :-D`}</h1>
          <p >This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          {/* {/* <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>  */}
          <div className='tc pa3 '>
          <p><a class="btn btn-primary btn-lg " href="#" role="button">Learn more &raquo;</a></p>
          <p><a class="btn btn-primary btn-lg " href="#" role="button">Learn more &raquo;</a></p>
          </div>
      </div>
    </div> 
 
   </div>
      
    )
};

export default About;