// would put this component and the associated files in the componenets folder

import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

// Make sure to be consistent about using tabs/spaces (spaces is correct answer btw, jk)

import './App.css'
import { StyleSheet, css } from 'aphrodite/no-important'
import {
	spaceing,
	color,
	greatFont,
	lightHeight,
	fontSize,
	openSans
} from './styles/base.css.js'

import SubmissionContainer from './SubmissionContainer'
import Nav from './components/Nav/Nav'
import WeatherContainer from './WeatherContainer'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

class App extends Component {
  render () {
    return (
    <div className={css(styles.app)}>
    <Nav />
    <Switch>
    <Route path={`/submissions`} render={() => <SubmissionContainer />} />
    <Route path={`/weather`} component={WeatherContainer} />
    <Route path={`/about`} component={About} />

    <Route path={`/`} render={() => <Redirect to='/weather' />} />
    <Route path={`*`} component={NotFound} />
  </Switch>
  </div>
  )
  }
}

export default App

const styles = StyleSheet.create({
  app: {
    backgroundColor: color.clightgrey,
    fontFamily: openSans.fontFamily,
    fontSize: fontSize.body
  }
})
