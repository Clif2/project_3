import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing } from '../../styles/base.css.js'

import Icon from '../Icon/Icon'
import WeatherFormIcon from '../WeatherFormIcon/WeatherFormIcon.js'


class IconButton extends Component {

    state = {
      selected: this.props.selected
    }

 updateCurrentForm = this.props.updateCurrentForm
 icon = this.props.icon
 type = this.props.type


 componentDidMount () {
 }

 onClick = e => {
   //onClick
   //check type
   //if type is clothing and it is toggledOn send imgURL
   //else send imgURL = ''
   let toggle  = !this.state.selected
   console.log('in onClick=>'+toggle);

  if (this.type === 'clothes')
  {
    if( toggle )
    {
      this.updateCurrentForm(this.type, this.icon.name, this.
                        icon.imgURL)
    }
    else{
      console.log('delete clothing item');
      this.updateCurrentForm(this.type, this.icon.name, '')
    }
  }
  else  //assumes the only other case is 'weather'
  {
    if(toggle){
      //update current form with this choice
      this.updateCurrentForm(this.type, this.icon.name,
                              this.icon.imgURL)
     //FIX and unselect any other selected choice
    }
    else{
      //we should remove this selection from currentform
      console.log('untoggle weather');
      this.updateCurrentForm(this.type, this.icon.name, '')
      //maybe a query select all on the class and then change the style?
    }
  }

this.setState((prevState) => ({selected: !prevState.selected}))

}//end onClick



  render () {
    return (
<<<<<<< HEAD
      <div
      className={css( this.state.selected ? styles.iconSelected : styles.icon)}
      onClick={this.onClick}>

=======
      <div 
      className={css( this.state.selected ? styles.iconSelected : styles.iconInactive, styles.icon)} 
      onClick={this.onClick}>
        
      {this.props.form != null ? <WeatherFormIcon icon={this.icon} />
        :
>>>>>>> CssStart
        <Icon icon={this.icon}/>
      }

      </div>
      )
  }
}

export default IconButton



const growKeyFrames = {

   '0%':  {transform: 'scale(1.0)' },
   '50%': {transform: 'scale(1.333)' },
   '100%': {transform: 'scaleY(1.0)'}

}

const shrinkKeyFrames = {

   '0%':  {transform: 'scale(1.0)' },
   '50%': {transform: 'scale(.65)' },
   '100%': {transform: 'scaleY(1.0)'}

}

export const styles = StyleSheet.create({
  
  icon : {
    height: '150px',
    width: '150px',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
 },
  
  
  iconInactive: {
    animationName: [shrinkKeyFrames],
		animationDuration:'1s', 
		animationTimingFunction:'ease', 
		animationDirection:'alternate',
		boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    padding: 0,
    margin: `${spaceing.s1}`,
    borderRadius: '9px',
    textDecoration: 'none',
    display: 'inline-block'
  },

  iconSelected: {
    animationName: [growKeyFrames],
		animationDuration:'1s', 
		animationTimingFunction:'ease', 
		animationDirection:'alternate', 
    padding: 0,
<<<<<<< HEAD
    border: '3px solid red',
    margin: `${spaceing.s2}`,
=======
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
>>>>>>> CssStart
    borderRadius: '9px',
    margin: `${spaceing.s2}`,
    display: 'inline-block'
  }
})
