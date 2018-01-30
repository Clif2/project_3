import React from 'react'

import IconButton from '../IconButton/IconButton.js'

const SubmissionForm = (props) => {
  
  const onSubmit = e => {
    e.preventDefault()
    let name = e.target.name.value
    let why = e.target.why.value                                            
    props.handleSubmission(name, why)  
  }
    
  
  return (
    <div> 
      
     <div className="weather">
      {props.weatherIcons.map((item, idx) =>
        <IconButton 
          updateCurrentForm={props.updateCurrentForm} 
          icon={item} 
          key={idx} 
        />
      )}
     </div>

     <div className="clothing">
      {props.clothingIcons.map((item, idx) =>
        <IconButton 
          updateCurrentForm={props.updateCurrentForm} 
          icon={item} 
          key={idx} 
        />
      )}
     </div>

     <form onSubmit={onSubmit}> 
      <input type='text'  name='name'/>
      <textarea name='why' /> 
      <button type='submit'>Submit</button>
     </form>

    </div>
  )

}

export default SubmissionForm

