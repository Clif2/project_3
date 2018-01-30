/*
GL
*/
import React from 'react'

//import components
import Icon from '../Icon/Icon'


const iconStyle = {
  height: '150px',
  width: '150px'
}

const largeIconStyle = {
  height: '300px',
  width: '300px'
}

const WeatherView = props => {
  console.log('WeatherView')
  console.log(props);
  let clothing = props.weather.clothes.map( (item, index)=>
      {
        let theIcon = { url: item.imgURL,
                        name: item.name,
                        type: 'clothing',
                        style: iconStyle}
        return ( <Icon  key={index}
                        icon={theIcon}  />)
      })

  let weatherInfo = { url: props.weather.imgURL,
                      name: props.weather.name,
                      type: 'weather',
                      style: largeIconStyle }

  return (

    <div>
      <h1>When It's {props.weather.name}</h1>
      <Icon icon={weatherInfo}/>
      <h4>You should wear...</h4>
      {clothing}
    <br/>
      <button onClick={props.toggleWeather}>Pick Another Weather</button>
    </div>
  )

}

export default WeatherView
