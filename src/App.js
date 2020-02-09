import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Counters from '../src/components/counters';

class App extends Component {
  render() {
    return (
      < React.Fragment >
        < NavBar />
        <main className="container">
          <Counters />
        </main>
      </ React.Fragment >
    );
  }
}

export default App;
