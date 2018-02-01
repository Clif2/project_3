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
    let name = e.target.name.value
    let why = e.target.why.value
    props.handleUpdate(name, why)
  }

  const updateFields = (e) => {
    e.preventDefault()
    let value  = e.target.value
    props.updateFields(e.target.name, value)
  }

  const deleteSubmission = e => {
    e.preventDefault()
    props.handleDelete()
  }

  return (
    <div>

     <div className="weather">
       <h1>Weather</h1>
      {props.weatherIcons.map((item, idx) =>
        <IconButton
          updateCurrentForm={props.updateCurrentForm}
          icon={item}
          type='weather'
          key={idx}
        />
      )}
     </div>

     <div className="clothing">
       <h1>Clothing</h1>
      {props.clothingIcons.map((item, idx) =>
        <IconButton
          updateCurrentForm={props.updateCurrentForm}
          icon={item}
          type='clothes'
          key={idx}
        />
      )}
     </div>

     {props.update === false?

      <form onSubmit={onSubmit}>
        <label htmlFor="input-name">Name: </label>
        <input id="input-name" onChange={updateFields} type='text'  name='name'/>
        <label htmlFor="input-why">Why is this a good choice?: </label>
        <textarea id="input-why" onChange={updateFields} name='why' />
        <button type='submit'>Submit</button>
      </form>
      :
      <form onSubmit={onUpdate}>
        <label htmlFor="input-name"> Name: </label>
        <input id="input-name" onChange={updateFields} type='text' name='name' value={props.formData.name}/>
        <label htmlFor="input-why">Why is this a good choice?: </label>
        <textarea id="input-why" onChange={updateFields} name='why' placeholder={props.formData.why}/>
        <button type='submit'>Update</button>
        <button onClick={deleteSubmission} name='delete'>Delete</button>
      </form>
      }


  </div>
  )

}

export default SubmissionForm
