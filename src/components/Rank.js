import React from 'react'
import axios from  'axios'
class Rank extends React.Component{
    // const [url,setUrl]=useState([]);
    constructor(){
        super();
        this.state={
            url:[
                {url:""},
                {url:""}
            ]
        }
    }
    fetchData=async ()=>{
        const route=process.env.REACT_APP_BACKEND+'rank';
        const res= await axios.get(route,{})
       this.setState({url:res.data.arr});

    }
    componentDidMount(){
        this.fetchData();
    }
    submitResponse=(choice)=>{
        const route=process.env.REACT_APP_BACKEND+'rank';
        const info={
            player:this.state.url[0],
            opponent:this.state.url[1],
            winner:String(choice)
        }
        axios.put(route,info)
        .then(res=>{
            if(!res.data.message){
                this.fetchData();
            }
            else{
                alert('No connectivity');
            }
        })
        .catch(err=>{});
    }


    render(){
    return(
        this.state.url===[] ?
        <div><br/><br/><br/><h1 className='f1'>Loading</h1></div>
        :
        <div className='tc' style={{height:"800px"}}><br /><br/><br/>
         <p className='tc f2 black-80'> Welcome to the Ranking Section</p>
         <p className='tc f2 black-80'> Select One</p>
         
        <section className="cf dib br3 tc bw5 w-40 ma2 grow shadow-5 pa2" onClick= {()=>this.submitResponse(1)}>
            <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div class="aspect-ratio aspect-ratio--1x1">
                <img src={this.state.url[0].url} alt=''
                class="db bg-center cover aspect-ratio--object" />
                </div>
            </article>
        </section>
        <section class="cf dib br3 tc bw5 w-40 ma2 grow shadow-5 pa2" onClick= {()=>this.submitResponse(2)}>
            <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div class="aspect-ratio aspect-ratio--1x1">
                <img src={this.state.url[1].url} alt=''
                class="db bg-center cover aspect-ratio--object" />
                </div>
            </article>
        </section><br/><br/>
    </div>
    )
}
}
export default Rank;