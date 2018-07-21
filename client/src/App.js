import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import About from './components/layout/About';
import Footer from './components/layout/Footer';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />

        </div>
      </Router>
    );
  }
}

export default App;
