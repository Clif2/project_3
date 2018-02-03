import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { spaceing } from '../../styles/base.css.js';

import IconButton from '../IconButton/IconButton';
import WeatherFormIcon from '../WeatherFormIcon/WeatherFormIcon.js';

class WeatherChoices extends Component {
	state = {
		selectedWeather: ''
	};

	componentDidMount() {
		this.setState(prevState => ({
			selectedWeather: this.props.selectedWeather
		}));
	}

	onChangeWeather = (type, name, imgURL) => {
		//calls the updateCurrentForm function passed down from parent
		//then sets the state for the current weather
		//thereby forcing a render to unselect other weather icons

		if (imgURL) {
			this.setState(
				prevState => ({ selectedWeather: name }),
				this.props.updateCurrentForm(type, name, imgURL)
			);
		} else {
			this.setState(
				prevState => ({ selectedWeather: '' }),
				this.props.updateCurrentForm(type, name, imgURL)
			);
		}
	};

	render() {
		let weather = '';
		if (!this.state.selectedWeather) {
			weather = this.props.weather.map((item, idx) => {
				console.log('everything should be getting deleted');
				return (
					<IconButton
						updateCurrentForm={this.props.updateCurrentForm}
						onChangeWeather={this.onChangeWeather}
						icon={item}
						type="weather"
						selected={false}
						key={idx}
					/>
				);
			}); //end map
		} else {
			//end if
			weather = this.props.weather.map((item, idx) => {
				let isSelected = false;
				if (this.state.selectedWeather === item.name) {
					isSelected = true;
				}

				return (
					<IconButton
						updateCurrentForm={this.props.updateCurrentForm}
						onChangeWeather={this.onChangeWeather}
						icon={item}
						type="weather"
						selected={isSelected}
						key={idx}
					/>
				);
			}); //end map
		} //end else

		return <div>{weather}</div>;
	}
}

export default WeatherChoices;
