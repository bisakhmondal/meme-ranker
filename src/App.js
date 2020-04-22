import React,{useState} from 'react';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/navigation';
import Hero from './components/jumbo';
import CardList from './components/CardList';
import Rank from './components/Rank';
import About from './components/About';
const App=()=>{
  const [input,setIp]=useState('');
    return (
      <Router>
        <Navigation  sip={setIp} />
         <Switch>
          <Route exact path="/" >
          <Hero />
          <CardList ip={input}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
            <Route path="/ranking">
              <Rank />
            </Route>
        </Switch> 
  </Router>
      

    )
}

export default App;
