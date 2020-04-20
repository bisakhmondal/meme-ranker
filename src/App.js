import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Navigation from './components/navigation';
import Hero from './components/jumbo';
import CardList from './components/CardList';
class App extends React.Component{

  render(){
    return (
      // <Router>
      <div>
      {/* <Hero /> */}
        <Navigation />
        <Hero />
        <CardList />
</div>
        /* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/ranking">
            <Rank />
          </Route>
        </Switch> */

      // </Router>
      

    )
  }
}

export default App;
