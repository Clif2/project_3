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

     <div className="clothing">
      {props.clothingIcons.map((item, idx) =>
        <Icon icon={item} key={idx} />
      )}
     </div>

     <form> 
      <input type='text' name='name'/>
      <textarea name='why' /> 
      <button>Submit</button>
    </form>
    </div>
  )

}

export default SubmissionForm 
