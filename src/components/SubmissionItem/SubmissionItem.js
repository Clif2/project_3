/*
GL
*/
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing } from '../../styles/base.css.js'
import { button } from '../../styles/button.css.js' 

//import component icons
import Icon from '../Icon/Icon'

const iconStyle = {
  height: '150px',
  width: '150px'
}



const SubmissionItem = props => {
      let clothing = props.input.clothes.map( (item, index) => {
          console.log('map=>'+item);
          let theIcon = { imgURL: item.imgURL,
                          name:item.name,
                          type:'clothes',
                          style: iconStyle}
          return ( <Icon key={index}
                                    icon={theIcon}
                                    />)
                   }) //end map

  return (

    <div className={css(styles.card)} style={props.style}>
      <h3>When it's {props.input.weather} {props.input.name} wears:</h3>
      <div className='icon-list'>
        {clothing}
      </div>
      <p>because..."{props.input.why}"</p>

      <button className={css(styles.button)} onClick={()=>{props.handleUpdate(props.input._id)}}>Edit</button>
    </div>

  )

}

export default SubmissionItem

const styles = StyleSheet.create({
 card: {
  padding: spaceing.s4, 
  background: 'rgba(255, 255, 255, 1.0)',
  boxShadow: '0 3px 17px 2px rgba(0, 0, 0, .05)',
  borderRadius: '9px'
 },

  button: {
	 'min-width': '150px',
	 'max-width': '250px',
	  display: 'block',
	  border: '3px black solid',
    borderRadius: '48px',
    background: 'none',
	  color: 'inherit',
	  'vertical-align': 'middle',
	  position: 'relative',
	  'z-index': '1',
    margin: spaceing.s1,
    padding: spaceing.s1,
    transition: button.transition,
    ':before, :after': button.sharedPseudo,  
    ':before': button.before,
    ':after': button.after,

  
  ':hover': {
     color: '#fff'
   },
  ':hover::before': {
     opacity: 1
   },
 
  ':hover::after': {
   'background-color': '#fff'
   },
  
   ':hover::after, :hover::before': {
   transform: 'scale3d(1, 1, 1)'    
   }
 }  //button end  
})  //styles end                               
