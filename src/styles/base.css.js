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
  src: "url('https://fonts.googleapis.com/css?family=Fredericka+the+Great') format('frederickaTheGreat')"
};


export const fontSize = {

  //heading 
  // 32, 42, 56
  //body
  
  body : '18px'
}


export const lineHight = {

  body: '24px'

}


const spacingFac = 9 
export const spaceing = {
    s0: `${perfectFourth(spacingFac, 0)}px`, 
    s1: `${perfectFourth(spacingFac, 1)}px`, 
    s2: `${perfectFourth(spacingFac, 2)}px`, 
    s3: `${perfectFourth(spacingFac, 3)}px`, 
    s4: `${perfectFourth(spacingFac, 4)}px`, 
    s5: `${perfectFourth(spacingFac, 5)}px`, 
  
}

function perfectFourth (spacingFactor, exp) {
 return Math.round(spacingFactor * Math.pow(1.333, exp)) 
  
}
