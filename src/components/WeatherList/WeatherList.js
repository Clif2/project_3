/*
GL
*/
import React from 'react'

import IconButton from '../IconButton/IconButton'

//import components

const iconStyle = {
  height: '150px',
  width: '150px',
  margin: '9px'
}

const WeatherList = props => {



  let weathers = props.weathers.map((item, index) => {
    let theIcon = {
      imgURL: item.imgURL,
      name: item.name,
      type: 'weather',
      style: iconStyle
    }
    return ( < IconButton key = {
        index
      }
      updateCurrentForm = {
        props.handleUpdate
      }
      icon = {
        theIcon
      }
      />
    )
  })


  return ( 
    <div>
    <h1> Choose Your Weather </h1> 
    {weathers} 
    </div>
  )
}

export default WeatherList
