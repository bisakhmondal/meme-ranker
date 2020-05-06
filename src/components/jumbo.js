import React,{ useState} from 'react';
import {Link} from 'react-router-dom';
import './jumbo.css';
import 'tachyons';
import axios from 'axios';
const Hero=()=>{
  const [url,setUrl]=useState('');
  const [name,setName]=useState('');

  const submit=async ()=>{
    const route=process.env.REACT_APP_BACKEND+'main/attach';
    const info={
      name:name,
      url:url
    }
    if(name==='' || url===''){
      alert('Please fill first');
      return;
    }
    setName('');
    setUrl('');
    const res= await axios.post(route,info);
    if(res.data.message){
        alert(res.data.message);
        return;
    }
    alert('Thanks for the submission');
  }
  return (
        <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">{`Welcome Memers ;)`}</h1>
          <p className='f3 tc'>A site to checkout trending memes based on their popularity, user votes. Feel free to cast your vote too in the <Link to='/ranking'>Rank</Link> section.</p>
          <div className="pa0-l">
  <div className="bg-animate shadow-5 center mw7  pa4 br3-ns ba b--black-10">
    <div className="cf bn ma0 pa0">
      <legend className="pa0 f5 f4-ns mb3 tc black-80">Contribute a meme</legend>
      <div className="cf ">

        <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-40  br2-ns br bw2 b--black  " placeholder="image url" value={url} type="text" onChange={e=>setUrl(e.target.value)}  />
        <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-40  " placeholder="Description (short)" type="text" value={name} onChange={e=>setName(e.target.value)} />
        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-blue hover-bg-black white pointer w-20   br2-ns br--right-ns " type="submit" value="Submit" onClick={()=>submit()}/>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

    );
}
export default Hero;