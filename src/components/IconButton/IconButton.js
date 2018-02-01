import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing } from '../../styles/base.css.js'

import Icon from '../Icon/Icon'


class IconButton extends Component {
  
  state = {
    selected: false
  }
 
 updateCurrentForm = this.props.updateCurrentForm 
 icon = this.props.icon
 type = this.props.type


 componentDidMount () {
   console.log(this.props)
 } 

 onClick = e => {
   this.updateCurrentForm(this.type, this.icon.name, this.
                     icon.imgURL)
   this.setState((prevState) => ({selected: !prevState.selected}))
  }
    

  render () {
    return (
      <div 
      /*className={this.state.selected 
                ?
                {css(styles.iconSelected)}  
                :
                {css(styles.icon)} 
                }
      */
      className={css(styles.icon)}
      onClick={this.onClick}>
        
        <Icon icon={this.icon}/>
      </div>
      )
  }
}

export default IconButton


export const styles = StyleSheet.create({
  icon: {
    padding: 0,
    border: '3px solid blue',
    margin: `${spaceing.s2}`,
    borderRadius: '9px',
    textDecoration: 'none',
    display: 'inline-block'
  },

  iconSelected: {
    padding: 0,
    border: '3px solid red', 
    margin: `${spaceing.s2}`,
    borderRadius: '9px',
    textDecoration: 'none',
    display: 'inline-block'
  }
})
