/*
GL
*/
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing, color } from '../../styles/base.css.js'

//import component icons
import Icon from '../Icon/Icon'

const iconStyle = {
  height: '150px',
  width: '150px'
}



const SubmissionItem = props => {
      let clothing = props.input.clothes.map( (item, index) => {
          // console.log('map=>'+item);
          let theIcon = { imgURL: item.imgURL,
                          name:item.name,
                          type:'clothes',
                           }
          return ( <Icon key={index}
                                    icon={theIcon}
                                    />)
                   }) //end map

  return (

    <div className={css(styles.card)} style={props.style}>
      <h3>When it's <span className={css(styles.weatherSpan)}>{props.input.weather}</span> {props.input.name} wears:</h3>
      <div className={css(styles.iconStyle)}>
        {clothing}
      </div>
      <p>because..."<span className={css(styles.quoteSpan)}>{props.input.why}</span>"</p>

      <button className={css(styles.button)} onClick={()=>{props.handleUpdate(props.input._id)}}>Edit</button>
    </div>

  )

}

export default SubmissionItem

const styles = StyleSheet.create({

 weatherSpan: {
   color: 'rgb(245,50,64)',
   textTransform: 'uppercase'
 },

 quoteSpan: {
   color: 'rgb(18, 100, 232)'
 },

  iconStyle: {
    margin: spaceing.s1,
    display: 'grid',
    'justify-content': 'space-between',
    'alight-content': 'center',


  },


  card:{
  padding: spaceing.s3,
  background: color.white,
  boxShadow: '0 72px 82px 81px rgba(0, 0, 0, .07)',
  borderRadius: '9px',
  border: '2px solid',
  'border-color': color.clightgrey
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
//    transition: button.transition,
    ':before, :after': {
        content: '""',
        position: 'absolute',
        backgroundColor: color.primary,
        borderRadius: '48px',
      },
 //   ':before': button.before,
 //   ':after': button.after,


  ':hover': {
     backgroundColor: color.clightgrey,
     color: color.secondary
   },
  ':hover::before': {
     opacity: 1
   },

  ':hover::after': {
   'background-color': color.clightgrey
   },

   ':hover::after, :hover::before': {
   transform: 'scale3d(1, 1, 1)'
   }
 }  //button end
})  //styles end
