import React from 'react'

import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing } from '../../styles/base.css.js'
 // functional component that returns an icon


const WeatherFormIcon = ({icon}) => {

const iconStyle = {
    height: '150px',
   width: '150px',
   borderRadius: '9px'
}

const hiddenInput = {
   marging: '0',
   padding: '0',
   appearance: 'none' //,
   //visibility: 'hidden'
}



  return (
      <div className={css( styles.ccSelector)}>
        className='cc-selector'>
       <input style={hiddenInput} id={icon.name} type='radio' name='weather'
         
    />
     <img src={icon.imgURL} style={iconStyle} alt={icon.name}/>
     </div>
   )

}

export default WeatherFormIcon

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
    boxShadow: '0 19px 38px rgb(23, 105, 237), 0 15px 12px rgb(222, 128, 237)',

    // boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    borderRadius: '9px',
    margin: `${spaceing.s2}`,
    display: 'inline-block'
  }
})





//+++++++++++++++++++++++++++++
// .cc-selector input{
//     margin:0;padding:0;
//     -webkit-appearance:none;
//        -moz-appearance:none;
//             appearance:none;
// }
// .visa{background-image:url(http://i.imgur.com/lXzJ1eB.png);}
// .mastercard{background-image:url(http://i.imgur.com/SJbRQF7.png);}
//
// .cc-selector input:active +.drinkcard-cc{opacity: .9;}
// .cc-selector input:checked +.drinkcard-cc{
//     -webkit-filter: none;
//        -moz-filter: none;
//             filter: none;
// }
// .drinkcard-cc{
//     cursor:pointer;
//     background-size:contain;
//     background-repeat:no-repeat;
//     display:inline-block;
//     width:100px;height:70px;
//     -webkit-transition: all 100ms ease-in;
//        -moz-transition: all 100ms ease-in;
//             transition: all 100ms ease-in;
//     -webkit-filter: brightness(1.8) grayscale(1) opacity(.7);
//        -moz-filter: brightness(1.8) grayscale(1) opacity(.7);
//             filter: brightness(1.8) grayscale(1) opacity(.7);
// }
// .drinkcard-cc:hover{
//     -webkit-filter: brightness(1.2) grayscale(.5) opacity(.9);
//        -moz-filter: brightness(1.2) grayscale(.5) opacity(.9);
//             filter: brightness(1.2) grayscale(.5) opacity(.9);
// }
//
// /* Extras */
// a:visited{color:#888}
// a{color:#444;text-decoration:none;}
// p{margin-bottom:.3em;}
