import React, { Component } from 'react'
import {
  Route,
  //Link,
  Redirect,
  Switch
} from 'react-router-dom'
// import logo from './logo.svg'

import './App.css'
import SubmissionContainer from './SubmissionContainer'
import Nav from './components/Nav/Nav'
import WeatherContainer from './WeatherContainer'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
            {/* <Route path={`/submissions`} component={SubmissionContainer}/> */}
            <Route path={`/submissions`} render={() => (
              <SubmissionContainer />)}
            />
            <Route path={`/weather`} component={WeatherContainer}/>
            <Route path={'/about'} component={About}/>

            <Route path='/' render={()=><Redirect to='/weather'/>}/>
            <Route path='*' component={NotFound}/>
        </Switch>
     </div>
    )
  }
}

export default App
