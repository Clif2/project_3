/*
GL
*/
import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { spaceing, color } from '../../styles/base.css.js';

//import components
import Icon from '../Icon/Icon';

const iconStyle = {
	height: '150px',
	width: '150px'
};

const largeIconStyle = {
	height: '300px',
	width: '300px'
};

const WeatherView = props => {
	let clothing = props.weather.clothes.map((item, index) => {
		let theIcon = {
			imgURL: item.imgURL,
			name: item.name,
			type: 'clothing',
			style: iconStyle
		};
		return <Icon key={index} icon={theIcon} />;
	});

	let weatherInfo = {
		imgURL: props.weather.imgURL,
		name: props.weather.name,
		type: 'weather',
		style: largeIconStyle
	};

	return (
		<div className={css(styles.card)}>
			<div className={css(styles.grid)}>
				<div className={css(styles.weather)}>
					<h1>When It's {props.weather.name}</h1>
					<Icon icon={weatherInfo} />
				</div>
				<div className={css(styles.clothes)}>
					<h4>You should wear...</h4>
					<div className={css(styles.icongrid)}>
						{clothing}
						<br />
						<button
							className={css(styles.button)}
							onClick={props.toggleWeather}
						>
							Pick Another Weather
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherView;
const styles = StyleSheet.create({
	iconStyle: {
		margin: spaceing.s1
	},

	card: {
		width: '720px',
		margin: '0 auto',
		'margin-top': spaceing.s3,
		padding: spaceing.s3,
		background: color.white,
		boxShadow: '0 2px 2px 3px rgba(0, 0, 0, .07)',
		borderRadius: '9px',
		border: '2px solid',
		'border-color': color.clightgrey
	},

	grid: {
		width: '75%',
		display: 'grid',
		margin: '0 auto',
		'margin-top': spaceing.s3,
		'grid-template-columns': '1fr 1fr 1fr 1fr',
		'grid-gap': spaceing.s0
	},

	icongrid: {
		display: 'flex',
		'flex-wrap': 'wrap',
		'justify-content': 'space-evenly',
		'align-content': 'center',
		margin: spaceing.s1
	},

	weather: {
		'grid-column': 'span 1',
		border: `3px solid ${color.primary}`,
		padding: spaceing.s1,
		borderRadius: spaceing.s0
	},

	clothes: {
		'grid-column': '2 / 5',
		border: `3px solid ${color.primary}`,
		padding: spaceing.s1,
		borderRadius: spaceing.s0
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
		}
	}
}); //styles end
