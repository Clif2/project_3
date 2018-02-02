/* 
 * Visual Design System Reference 
 *  https://medium.freecodecamp.org/css-in-javascript-the-future-of-component-based-styling-70b161a79a32
 *  https://zellwk.com/blog/why-vertical-rhythms/
 *  
 *
 * Tools 
 *  https://drewish.com/tools/vertical-rhythm/
 *  http://www.modularscale.com/
 *
 */


//COLOR 

export const color = {
  
  primary: '#7cdbd5', //sky 
  secondary: '#02c8a7', //aqua

  accent: '#f53240', //coralred
  accent2: '#f9be02', //golden

  wdarkgrey: '#554f3b',
  wlightgrey: '#faf4el',

  cdarkgrey: '#485251',
  clightgrey: '#edf7f6', 

  white: '#fcfcfc'
}


// TYPOGRAPHY 
export const greatFont = {
  fontFamily: "'Fredericka the Great', cursive;",
  fontStyle: "normal",
  fontWeight: "normal",
  src: "url('https://fonts.googleapis.com/css?family=Fredericka+the+Great') format('woff2')"
};

export const cabinFont = {
  fontFamily: "'Cabin Sketch', cursive;",
  fontStyle: "normal",
  fontWeight: "normal",
  src: "url('https://fonts.googleapis.com/css?family=Fredericka+the+Great') format('woff2')"
};



export const openSans = {
  fontFamily:"'Open Sans', sans-serif;"
}

export const fontSize = {

  //heading 
  displayLarge: '56px',
  displayMedium: '42px',
  displaySmall: '32px', 
  heading: '24px',
  
  //body
  body : '18px'

}


export const lineHeight = {

  displayLarge: '72px', 
  displayMedium: '48px', 
  displaySmall: '48px',
  heading: '24px',
  body: '24px'

}


export const fontWeight ={
  bold: 800, 
  semibold: 600, 
  normal: 400, 
  light: 200,
}

const spacingFac = 9 
export const spaceing = {
    s0: `${perfectFourth(spacingFac, 0)}px`, 
    s1: `${perfectFourth(spacingFac, 1)}px`, 
    s2: `${perfectFourth(spacingFac, 2)}px`, 
    s3: `${perfectFourth(spacingFac, 3)}px`, 
    s4: `${perfectFourth(spacingFac, 4)}px`, 
    s5: `${perfectFourth(spacingFac, 5)}px`, 
    s6: `${perfectFourth(spacingFac, 6)}px`, 
    s7: `${perfectFourth(spacingFac, 7)}px`, 
    s8: `${perfectFourth(spacingFac, 8)}px`, 
    s9: `${perfectFourth(spacingFac, 9)}px`, 
    s10: `${perfectFourth(spacingFac, 10)}px`, 
  
    s12: `${perfectFourth(spacingFac, 12)}px`, 
}

function perfectFourth (spacingFactor, exp) {
 return Math.round(spacingFactor * Math.pow(1.333, exp)) 
  
}




