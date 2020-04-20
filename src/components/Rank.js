import React from 'react'

const Rank=({url})=>{
    return(
        <div className='tc'><br /><br/><br/>
         <p className='tc f2 black-80'> Welcome to the Ranking Section</p>
        {/* // <section class="cf br3 tc bw5 w-50 ma2 grow shadow-5 pa2-ns">
        // <article class="fl ">
        // <div class="aspect-ratio aspect-ratio--1x1">
        //     <button onclick="" className='pa2'><img src={url[0]} /></button>
        //     <button onclick="" className='pa2'><img src={url[1]} /></button>
        // </div>
        // </article>
        // </section> */}
         
        <section class="cf dib br3 tc bw5 w-40 ma2 grow shadow-5 pa2" onClick= {()=>console.log('1')}>
            <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div class="aspect-ratio aspect-ratio--1x1">
                <img src={url[0]}
                class="db bg-center cover aspect-ratio--object" />
                </div>
            </article>
        </section>
        <section class="cf dib br3 tc bw5 w-40 h-25 ma2 grow shadow-5 pa2" onClick= {()=>console.log('2')}>
            <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div class="aspect-ratio aspect-ratio--1x1">
                <img src={url[1]}
                class="db bg-center cover aspect-ratio--object" />
                </div>
            </article>
        </section><br/><br/>
        <footer className='f6 tr' > power of elo ranking algorithm</footer>
    </div>
    )
}
export default Rank;