import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import AllBeers from './components/AllBeers';
import Nav from './components/Nav';

import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/beers" component={AllBeers} /> } />
          <Route exact path="/beers/:id" component={BeerDetail} /> } />
          <Route exact path="/random-beer" component={RandomBeer} /> } />
          <Route exact path="/new" component={NewBeer} />
        </Switch>
       
      </div>
    );
  }
}

export default App;
