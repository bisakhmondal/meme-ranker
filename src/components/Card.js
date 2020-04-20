import React from 'react';
import 'tachyons'
const Card=({meme})=>{
    return (
        <section class="cf dib br3 tc bw5 w-30 h-25 ma2 grow shadow-5 pa2-ns">
        <p className="btn btn-success white b">Rank #1250</p>
  <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
    <div class="aspect-ratio aspect-ratio--1x1">
      <img src={meme.url}
      class="db bg-center cover aspect-ratio--object" />
    </div>
    <a href={meme.url} class="ph2 ph0-ns pb3 db">
      <h3 class="f5 f4-ns mb0 black-90">{meme.name}</h3>
      <h3 class="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
    </a>
  </article>
  </section>
    )
};

export default Card;