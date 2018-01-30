/*
GL & CP
*/
import React, { Component } from 'react'

import WeatherList from './components/WeatherList/WeatherList'
import WeatherView from './components/WeatherView/WeatherView'


let testWeathers = [
  { name:'Sunny',
    imgURL:'https://tinyurl.com/yal89jos',
    clothes: [{
      name: 'Sunglasses',
      imgURL: 'https://tinyurl.com/y9gvv5l6'
    }] },
  { name:'Cold',
    imgURL:'https://tinyurl.com/ybqbjvmv',
    clothes: [{name:'Hat', imgURL:'https://tinyurl.com/ydxohys4'},
              {name:'Scarf', imgURL:'https://tinyurl.com/yb7y3ge3'}] }
]


class WeatherContainer extends Component {
  state = {
    weathers : [],
    weatherListToggle: true,
    currentWeather: { name:'Cold',
      imgURL:'https://tinyurl.com/ybqbjvmv',
      clothes: [{name:'Hat', imgURL:'https://tinyurl.com/ydxohys4'},
                {name:'Scarf', imgURL:'https://tinyurl.com/yb7y3ge3'}] }
  }

  //Toggles whether or not the form component is showing
    toggleWeatherList = () => {
      console.log('toggleWeather');
      this.setState({weatherListToggle: !this.state.weatherListToggle})
    }

// when you click on Weather Button in WeatherList
  handleUpdate = (type, name) => {
    console.log('name=>'+name);

      //later this will do an api call to fill in the weather info
    this.setState({ weatherListToggle: false,
                    currentWeather: {name:name}})
  }

  componentDidMount(){
    console.log('componentDidMount');
    //make axios call to project3_API
    this.setState({weathers: testWeathers})
    console.log(this.state.weathers);
  }

  render(){
    return (
      <div className='submission-container'>
        {this.state.weatherListToggle? <WeatherList
                                    handleUpdate={this.handleUpdate}
                                    weathers={this.state.weathers}
                                    />
                                    :
                                    <WeatherView weather={this.state.currentWeather}
                                             toggleWeather={this.toggleWeatherList}
                                            />}
      </div>
    )
  }

}

export default WeatherContainer
