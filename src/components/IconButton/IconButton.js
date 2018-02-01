import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing } from '../../styles/base.css.js'

import Icon from '../Icon/Icon'


//Gwen--onClick
//check type
//if type is clothing and it is toggledOn send imgURL
//else send imgURL = ''

  // const onClick = e => {
  //   updateCurrentForm(type, icon.name, icon.imgURL)

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
   let toggle  = !this.state.selected
   if (this.type === 'clothing')
   {
     if( this.state.selected)
     {
       this.updateCurrentForm(this.type, this.icon.name, this.
                         icon.imgURL)
     }
     else{
       this.updateCurrentForm(this.type, this.icon.name, imgURL='')
     }
   }
   else  //assumes the only other case is 'weather'
   {
     this.updateCurrentForm(this.type, this.icon.name, this.
                       icon.imgURL)
   }
   this.setState((prevState) => ({selected: toggle}))
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
