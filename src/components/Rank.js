import React,{useState,useEffect} from 'react'
import axios from  'axios'

const Rank=()=>{
    const [url,setUrl]=useState(null);
    const fetchData=()=>{
        const route=process.env.REACT_APP_BACKEND+'rank';
        axios.get(route,{})
        .then(res=>{
            console.log("here")
            console.log(res)
            setUrl(res.data.arr);
            console.log(url);
        })
        .catch(err=>{console.log(err)});
    }

    const submitResponse=(choice)=>{
        const route=process.env.REACT_APP_BACKEND+'rank/';
        const info={
            player:this.state.url[0],
            opponent:this.state.url[1],
            winner:String(choice)
        }
        axios.put(route,info)
        .then(res=>{
            if(!res.message){
                axios.post(route)
                .then(res=>{
                    setUrl({url:res.arr});
                })
                .catch(err=>{});
            }else{
                alert(res.message);
            }
        })
        .catch(err=>{});
    }
    useEffect(fetchData,1,[]);
    return(

    // {fetchData()}
        // this.state.url===[] ?
        <h1>Loading</h1>
    //     :
    //     <div className='tc'><br /><br/><br/>
    //      <p className='tc f2 black-80'> Welcome to the Ranking Section</p>
    //     {/* // <section class="cf br3 tc bw5 w-50 ma2 grow shadow-5 pa2-ns">
    //     // <article class="fl ">
    //     // <div class="aspect-ratio aspect-ratio--1x1">
    //     //     <button onclick="" className='pa2'><img src={url[0]} /></button>
    //     //     <button onclick="" className='pa2'><img src={url[1]} /></button>
    //     // </div>
    //     // </article>
    //     // </section> */}
         
    //     <section class="cf dib br3 tc bw5 w-40 ma2 grow shadow-5 pa2" onClick= {()=>this.submitResponse(1)}>
    //         <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
    //             <div class="aspect-ratio aspect-ratio--1x1">
    //             <img src={this.state.url[0].url}
    //             class="db bg-center cover aspect-ratio--object" />
    //             </div>
    //         </article>
    //     </section>
    //     <section class="cf dib br3 tc bw5 w-40 h-25 ma2 grow shadow-5 pa2" onClick= {()=>this.submitResponse(2)}>
    //         <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
    //             <div class="aspect-ratio aspect-ratio--1x1">
    //             <img src={this.state.url[1].url}
    //             class="db bg-center cover aspect-ratio--object" />
    //             </div>
    //         </article>
    //     </section><br/><br/>
    //     <footer className='f6 tr' > power of elo ranking algorithm</footer>
    // </div>
    )
}
export default Rank;