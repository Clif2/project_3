import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing } from '../../styles/base.css.js'

import IconButton from '../IconButton/IconButton'
import WeatherFormIcon from '../WeatherFormIcon/WeatherFormIcon.js'


class WeatherChoices extends Component {

    state = {
      selectedWeather: ''
    }

    // icon = this.props.icon
    // type = this.props.type

 componentDidMount () {
   this.setState((prevState) => ({selectedWeather: this.props.selectedWeather}))
 }

 //onChangeWeather = e => {
   //onClick
   //check type
   //if type is clothing and it is toggledOn send imgURL
   //else send imgURL = ''
//    let toggle  = !this.state.selected
//
//   if (this.type === 'clothes')
//   {
//     if( toggle )
//     {
//       this.updateCurrentForm(this.type, this.icon.name, this.
//                         icon.imgURL)
//     }
//     else{
//       console.log('delete clothing item');
//       this.updateCurrentForm(this.type, this.icon.name, '')
//     }
//   }
//   else  //assumes the only other case is 'weather'
//   {
//     //FIX I think  i can make this more dry and take it out completely
//     if( toggle )
//     {
//       this.updateCurrentForm(this.type, this.icon.name, this.
//                         icon.imgURL)
//     }
//     else{
//       console.log('delete weather item');
//       this.updateCurrentForm(this.type, this.icon.name, '')
//     }
//   }
//
// this.setState((prevState) => ({selectedWeather: ''}))

//}//end onClick




  render () {
    console.log('props of weatherchoices');
    console.log(this.props);
    let weather = ''
    if(!this.props.selectedWeather){
      weather = this.props.weather.map((item, idx) =>{
      return(
        <IconButton
          //FIX this should pass our new function which wraps this one
          updateCurrentForm={this.props.updateCurrentForm}
          icon={item}
          type='weather'
          selected= {false}
          key={idx}
        />)

      }
      )//end map
    }//end if
    else{
      weather = this.props.weather.map((item, idx) =>{
        let isSelected = false
        if (this.props.formData.weather===item.name) {isSelected = true}
        return(
        <IconButton
          updateCurrentForm={this.props.updateCurrentForm}
          icon={item}
          type='weather'
          selected={isSelected}
          key={idx}
        />)
      }
    )//end map

    }//end else


    return (
      <div>
        {weather}
      </div>
      )
  }
}

export default WeatherChoices
