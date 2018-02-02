import React, { Component } from 'react'
import axios from 'axios'
import { StyleSheet, css } from 'aphrodite/no-important'
import { color } from '../../styles/base.css.js'

import Icon from '../Icon/Icon'

const iconStyle = {
  height: '150px',
  width: '150px',
  margin: '9px'
}

const URL = 'https://api.apixu.com/v1/current.json?key=3bbfa05e4baa44a39d7155146180202&q='
class LiveWeather extends Component {

  state = {
    temperature: '',
    imgURL: '',
    feelsLike: '',
    condition: '',
    wind: '',
    zipcode: '',
    location: ''
  }

//on mounting get location data, then use that to get current weather
  componentDidMount(){
    let zipcode=''
    axios.get(`https://freegeoip.net/json/`).then(
      (res) => {

        zipcode= res.data.zip_code
        axios.get(`${URL}${res.data.zip_code}`).then(response => {

          this.setState( prevState => { return {
            temperature: response.data.current.temp_f,
            imgURL: response.data.current.condition.icon,
            feelsLike: response.data.current.feelslike_f,
            condition: response.data.current.condition.text,
            wind: response.data.current.wind_mph,
            zipcode: res.data.zip_code,
            location: res.data.region_name
          } })}
        )
      }
    )
  }

render(){
    let theIcon = {
      imgURL: this.state.imgURL,
      name: this.state.condition,
      type: 'weather',
      style: iconStyle
    }
  return (
      <div className={css(styles.liveWeather)}>
        <h3>Current Weather in </h3>
        <h3>{this.state.location}</h3>
        { this.state.zipcode ?
          <div >
            <Icon icon={theIcon}/>
            <p><span className={css(styles.weatherLabel)}>{this.state.condition} </span> </p>
            <p><span className={css(styles.weatherLabel)}> Current Temp: </span>{this.state.temperature}F</p>
            <p><span className={css(styles.weatherLabel)}> Feels Like: </span>{this.state.feelsLike}F</p>
            <p><span className={css(styles.weatherLabel)}> Wind: </span>{this.state.wind}mph</p>
          </div>
        :
          <p>weather not available</p>
      }
      </div>
  )
}
}
export default LiveWeather

export const styles = StyleSheet.create({

  liveWeather : {
    height: '225px',
    width: '225px',
    color: 'rgb(18, 100, 232)',
    borderStyle: 'solid',
    borderColor: color.accent2,
    borderWidth: '1px',
    borderRadius: '5%',
    padding: '20px'
  },
  weatherLabel : {
    color: 'black'
 }
})
