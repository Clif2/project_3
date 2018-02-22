import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { spaceing } from '../../styles/base.css.js';

import Icon from '../Icon/Icon'; // Composability!
import WeatherFormIcon from '../WeatherFormIcon/WeatherFormIcon.js';

class IconButton extends Component {
	state = {
		selected: this.props.selected
	};

	updateCurrentForm = this.props.updateCurrentForm;
	icon = this.props.icon;
	type = this.props.type;

	componentDidMount() {
		// console.log('iconbutton componentDidMount');
		// this.setState((prevState) => ({selected: this.props.selected}))
	}

	onClick = e => {
		e.preventDefault();
		//onClick
		//check type
		//if type is clothing and it is toggledOn send imgURL
		//else send imgURL = ''
		let toggle = !this.state.selected;

		if (this.type === 'clothes') {
			if (toggle) {
				this.updateCurrentForm(this.type, this.icon.name, this.icon.imgURL);
			} else {
				console.log('delete clothing item');
				this.updateCurrentForm(this.type, this.icon.name, '');
			}
		} else if (this.type === 'weather') {
			if (toggle) {
				this.props.onChangeWeather(this.type, this.icon.name, this.icon.imgURL);
				//this.updateCurrentForm(this.type, this.icon.name, this.
				//                icon.imgURL)
			} else {
				// console.log('delete weather item');
				this.props.onChangeWeather(this.type, this.icon.name, '');
			}
		} else {
			//else this is a weatherview button
			this.updateCurrentForm(this.type, this.icon.name, this.icon.imgURL);
			return; // i'm thinking this return is unnecessary
		}

		this.setState(prevState => ({ selected: !prevState.selected }));
	}; //end onClick

	render() {
		// if(this.type ==='weather'){
		// console.log('rendering icons');
		// console.log('name ' + this.icon.name);
		// console.log('selected'+this.state.selected);}
		let isIconSelected = false;
		if (this.type === 'weather') {
			isIconSelected = this.props.selected;
		} else {
			isIconSelected = this.state.selected;
		}
		return (
			<div
				className={css(
					isIconSelected ? styles.iconSelected : styles.iconInactive,
					styles.icon
				)}
				onClick={this.onClick}
			>
				{this.props.isRadio != null ? (
					<div>
						<WeatherFormIcon icon={this.icon} />
					</div>
				) : (
					<div>
						<Icon icon={this.icon} />
					</div>
				)}
			</div>
		);
	}
}

export default IconButton;

const growKeyFrames = {
	'0%': { transform: 'scale(1.0)' },
	'50%': { transform: 'scale(1.333)' },
	'100%': { transform: 'scaleY(1.0)' }
};

const shrinkKeyFrames = {
	'0%': { transform: 'scale(1.0)' },
	'50%': { transform: 'scale(.65)' },
	'100%': { transform: 'scaleY(1.0)' }
};

export const styles = StyleSheet.create({
	icon: {
		height: '100px',
		width: '100px',
		margin: spaceing.s0,
		transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
	},

	iconInactive: {
		animationName: [shrinkKeyFrames],
		animationDuration: '.7s',
		animationTimingFunction: 'ease',
		animationDirection: 'alternate',
		boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
		padding: 0,
		borderRadius: '9px',
		textDecoration: 'none',
		display: 'inline-block'
	},

	iconSelected: {
		animationName: [growKeyFrames],
		animationDuration: '.7s',
		animationTimingFunction: 'ease',
		animationDirection: 'alternate',
		padding: 0,
		boxShadow: '0 19px 38px rgba(245,50,64, 1), 0 15px 12px rgba(245,50,64, 1)',
		borderRadius: '9px',
		display: 'inline-block'
	}
});
