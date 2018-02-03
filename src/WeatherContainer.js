/*
GL & CP
*/
import React, { Component } from 'react';
import axios from 'axios';

import WeatherList from './components/WeatherList/WeatherList';
import WeatherView from './components/WeatherView/WeatherView';

class WeatherContainer extends Component {
	state = {
		weathers: [],
		weatherListToggle: true,
		currentWeather: {}
	};

	//Toggles whether or not the form component is showing
	toggleWeatherList = () => {
		this.setState({ weatherListToggle: !this.state.weatherListToggle });
	};

	// when you click on Weather Button in WeatherList
	handleUpdate = (type, name) => {
		axios
			.get('https://project3api.herokuapp.com/weather/' + name)
			.then(response => {
				this.setState(prevState => {
					return {
						weatherListToggle: false,
						currentWeather: response.data
					};
				});
			});
	};

	componentDidMount() {
		//make axios call to project3_API
		axios.get('https://project3api.herokuapp.com/weather').then(response => {
			this.setState(prevState => {
				return { weathers: response.data };
			});
		});
	}

	render() {
		return (
			<div className="weather-container">
				{this.state.weatherListToggle ? (
					<WeatherList
						handleUpdate={this.handleUpdate}
						weathers={this.state.weathers}
					/>
				) : (
					<WeatherView
						weather={this.state.currentWeather}
						toggleWeather={this.toggleWeatherList}
					/>
				)}
			</div>
		);
	}
}

export default WeatherContainer;
