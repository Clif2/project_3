/*
GL
*/
import React from 'react'

import IconButton from '../IconButton/IconButton'

//import components

const iconStyle = {
  height: '150px',
  width: '150px'
}

const WeatherList = props => {
  console.log('WeatherList');
  console.log(props);
  let weathers = props.weathers.map( (item, index)=>
      {
        let theIcon = { url: item.imgURL,
                        name: item.name,
                        type: 'weather',
                        style: iconStyle}
        return ( <IconButton     key={index}
                                 updateCurrentForm={props.handleUpdate}
                                 icon={theIcon}/>
                                 )
      })



  return (
    <div>
     <h1>Choose Your Weather</h1>
     {weathers}
    </div>
  )

}

export default WeatherList
