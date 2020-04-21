import React from 'react';
import Card from './Card';
import axios from 'axios';
class CardList extends React.Component{
    constructor(){
        super();
        this.state={
            memes:[]
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData=async()=>{
        const route=process.env.REACT_APP_BACKEND+'main';
        const memes=await axios.get(route);
        this.setState({memes:memes.data});
    }
    render(){
        if(this.state.memes.length===0){
            return <h1 className='f1 tc'>Loading</h1>
        }
        const lis=this.state.memes.filter((val)=>val.name.toLowerCase().includes(this.props.ip.toLowerCase()));
        const meme=lis.map((val)=>{
            return <Card meme={val} />
        });
    
        return (
            <div className='tc'>
            <p className='f2 tc'> Top Picks</p>
            {meme}
            </div>
        )
        }
}
export default CardList;