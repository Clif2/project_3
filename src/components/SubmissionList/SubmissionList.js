/*
GL 
*/
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing, color, greatFont, lightHeight, fontSize, openSans  } from '../../styles/base.css.js'

//import components
import SubmissionItem from '../SubmissionItem/SubmissionItem'

const evenStyle = {
  background: 'white'
}
const oddStyle = {
  background: 'grey'
}

const SubmissionList = props => {
  console.log('props for submissionlist');

  console.log(props.inputs);
  let inputs = props.inputs.map( (input, index)=>
      {
        console.log('insubmissionlist');
        console.log(input);
        return ( <SubmissionItem key={index}
                                 input={input}
                                 handleUpdate={props.handleUpdate}/>)
      })


  return (
    <div>
      <div className={css(styles.heroSection)}>
        <div className={css(styles.callOut)}>
          <h1>What's Your Weather Ware?</h1>
          <button className={css(styles.buttonCall)} onClick={props.toggleForm}>Add Your Own Idea!</button>
        </div>
      </div>
      <div className={css(styles.main)}>
        {inputs}
      </div>
    </div>
  )

}

export default SubmissionList


const styles = StyleSheet.create ({


  main: {
    backgroundColor: color.clightgrey,
    'max-width': '960px',
    margin: '0 auto 30px',
    display: 'grid',
    'grid-template-columns': `repeat(auto-fill, minmax(300px, 1fr))`,
    'grid-gap': spaceing.s1
  },
  
  heroSection: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content' : 'space-evenly', 
    'align-content': 'center',
    height: spaceing.s12,
    backgroundColor: color.primary 
  }, 

  callOut: {
    fontFamily: greatFont.fontFamily, 
    fontSize: fontSize.displayLarge, 
    color: color.white
  }, 

   buttonCall: {
	 'min-width': '150px',
	 'max-width': '250px',
	  border: '3px solid',
    borderColor: color.accent,
    borderRadius: '3px',
    backgroundColor: color.accent,
	  color: color.white,
	  'vertical-align': 'middle',
	  position: 'relative',
    margin: spaceing.s3,
    padding: spaceing.s3,
    
    transition: 'color 0.3s',
    'transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)',
    
    
  ':hover': {
    backgroundColor: color.wlightgrey,   
    color: color.white 
   },
 
 }


}) 
