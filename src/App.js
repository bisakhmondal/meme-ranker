import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/navigation';
import Hero from './components/jumbo';
import CardList from './components/CardList';
import Rank from './components/Rank';
import About from './components/About';
class App extends React.Component{

  render(){
    return (
      <Router>
      {/* <div> */}
      {/* <Hero /> */}
        <Navigation />
         <Switch>
          <Route exact path="/">
          <Hero />
          <CardList />
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
}

export default App;
