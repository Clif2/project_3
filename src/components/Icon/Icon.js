import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing, color } from '../../styles/base.css.js'


// functional component that returns an icon
const iconStyle = {
  height: '100px',
  width: '100px',
  borderRadius: '9px'
}

const Icon = ({icon}) => {

  return (
      <img
        style={iconStyle}
        className={css(styles.img)}
        src={icon.imgURL}
        alt={icon.name}
      />
  )

}


export default Icon

const styles = StyleSheet.create ({
  
  img: {
    
  },
  
})
