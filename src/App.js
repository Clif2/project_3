import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import SubmissionContainer from './SubmissionContainer'
import Nav from './components/Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <SubmissionContainer/>
      </div>
    );
  }
}

export default App;
