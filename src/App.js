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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
            <Route path={`/submissions`} component={SubmissionContainer}/>
            <Route path={`/weather`} component={WeatherContainer}/>
            <Route path='/about' render={() => (
                <h4>About Page Goes Here</h4>
              )}
            />

            <Route path='/*' render={()=><Redirect to='/submissions'/>}/>
        </Switch>
     </div>
    )
  }
}

export default App
