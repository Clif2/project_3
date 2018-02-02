/*
GL 
*/
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing } from '../../styles/base.css.js'

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
        let style = {}
        if(index%2) {style=evenStyle}
        else {style=oddStyle}
        return ( <SubmissionItem key={index}
                                 style={style}
                                 input={input}
                                 handleUpdate={props.handleUpdate}/>)
      })


  return (
    <div>
      <div className={css(styles.heroSection)}>
        <div>
          <h1>What's Your Weather Ware?</h1>
          <button onClick={props.toggleForm}>Add Your Own Idea!</button>
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
    'margin-bottom': spaceing.s3, 
    height: spaceing.s6
  }

  callOut: {
    
  }


}) 
