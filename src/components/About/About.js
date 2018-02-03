import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import {
	spaceing,
	color,
	greatFont,
	lineHeight,
	fontSize,
	openSans
} from '../../styles/base.css.js';

const About = ({ about }) => {
	return (
		<div className={css(styles.card)}>
			<div className={css(styles.grid)}>
				<h1 className={css(styles.title)}>About WeatherWise</h1>
				<p className={css(styles.blurb)}>
					WeatherWise is a fun, modern way to style your wardrobe depending on
					the weather. Great for kids, and adults who sometimes need that added
					inspiration when planning for the day!
				</p>
			</div>
		</div>
	);
};

//find a logo
export default About;

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

	title: {
		'grid-column': 'span 1',
		fontFamily: greatFont.fontFamily,
		fontSize: fontSize.displayLarge,
		adding: spaceing.s1,
		borderRadius: spaceing.s0
	},

	blurb: {
		'grid-column': '1 / 5',
		border: `1px solid ${color.primary}`,
		padding: spaceing.s6,
		borderRadius: spaceing.s0,
		margin: `${spaceing.s6} auto`,
		lineHeight: lineHeight.body
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
