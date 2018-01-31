import React from 'react'

import IconButton from '../IconButton/IconButton.js'

const SubmissionForm = (props) => {
  
  const onSubmit = e => {
    e.preventDefault()
    let name = e.target.name.value
    let why = e.target.why.value                                            
    props.handleSubmission(name, why)  
  }
    
 
  const onUpdate = e => {
    e.preventDefault()
    props.handleUpdate  
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

     {props.update == false?

      <form onSubmit={onSubmit}> 
        <input type='text'  name='name'/>
        <textarea name='why' /> 
        <button type='submit'>Submit</button>
      </form>
      :
      <form> 
        <input type='text'  name='name'/>
        <textarea name='why' /> 
        <button type='submit'>Update</button>
        <button name='delete'>Delete</button> 
      </form>
      }

           
  </div>
  )

}

export default SubmissionForm

