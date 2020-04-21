import React from 'react';
import 'tachyons'
import logo from './dwnld.png';
const Card=({meme})=>{
    return (
        <section class="cf dib br3 tc bw5 w-30 h-25 ma2 grow shadow-5 pa2-ns">
       <p className="btn btn-warning tc white b pa-2" >Rank #{meme.rank}</p>
  <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
    <div class="aspect-ratio aspect-ratio--1x1">
      <img src={meme.url} alt=''
      class="db bg-center cover aspect-ratio--object" />
    </div>
    <div class="ph2 ph0-ns pb3 pa1   db">
      <h3 class="f5 f4-ns mb0 black-90">{meme.name}</h3>
    </div>
  <div className=' pa0 bg-animate tr' style={{"margin-top":"none"}} >
  
  <a href={meme.url} ><img src={logo} alt=''  style={{'width':'40px','height':"auto"}} /></a>
  </div>

  </article>
  </section>
    )
};

export default Card;