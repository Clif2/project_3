/*
GL
*/
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing, color } from '../../styles/base.css.js'

import IconButton from '../IconButton/IconButton'

//import components

const iconStyle = {
  height: '150px',
  width: '150px',
  margin: '9px'
}

const WeatherList = props => {



  let weathers = props.weathers.map( (item, index)=>
      {
        let theIcon = { imgURL: item.imgURL,
                        name: item.name,
                        type: 'weather',
                        style: iconStyle}
        return ( <IconButton     key={index}
                                 updateCurrentForm={props.handleUpdate}
                                 icon={theIcon}/>
                                 )
      })



  return (
    <div className={css(styles.card)}>
     <h1>Choose Your Weather</h1>
     <div className={css(styles.grid)}>
       {weathers}
     </div>
   </div>
  )
}

export default WeatherList

const styles = StyleSheet.create({
 
    
  iconStyle: {
    margin: spaceing.s1,
    
  },
   

  card:{
    width: '720px',
    margin: '0 auto',
    'margin-top': spaceing.s3,
    padding: spaceing.s3, 
    background: color.white,
    boxShadow: '0 2px 2px 3px rgba(0, 0, 0, .07)',
    borderRadius: '9px',
    border: '2px solid',
    'border-color': color.clightgrey,
  },
  
  grid: {
    width: '75%',
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'space-evenly',
    margin: `${spaceing.s3} auto`,
  },

  button: {
	 'min-width': '150px',
	 'max-width': '250px',
	  border: '3px solid',
    borderColor: color.secondary,
    borderRadius: '48px',
    backgroundColor: color.primary,
	  color: color.cdarkgrey,
	  'vertical-align': 'middle',
	  position: 'relative',
    margin: spaceing.s1,
    padding: spaceing.s1,
  
  ':hover': {
     backgroundColor: color.clightgrey,
     color: color.secondary 
    },
   },
 
})  //styles end  


