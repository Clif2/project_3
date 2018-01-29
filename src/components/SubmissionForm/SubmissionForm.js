// import dep 
import React from 'react'

//import component icons

import Icon from '../Icon/Icon.js'
// create class SubmissionForm 

const SubmissionForm = (props) => {
  
  return (
    <div> 
     <div className="weather">
      {props.weatherIcons.map((item, idx) =>
        <Icon icon={item} key={idx} />
      )}
     </div>
    </div>
  )

}
// list icons for weather 
// list icons for clothing 
// 
// display name input 
// display why input 

export default SubmissionForm 
