import React from 'react'

import IconButton from '../IconButton/IconButton.js'
import WeatherFormIcon from '../WeatherFormIcon/WeatherFormIcon.js'

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


  let weather = []
  let clothes = []

  if (!props.update){
    weather = props.weatherIcons.map((item, idx) =>{
    return(
      <IconButton
        updateCurrentForm={props.updateCurrentForm}
        isRadio='1'
        icon={item}
        type='weather'
        selected= {false}
        key={idx}
      />)}
    )//end map

    clothes = props.clothingIcons.map((item, idx) => {
      return(
      <IconButton
        updateCurrentForm={props.updateCurrentForm}
        icon={item}
        type='clothes'
        selected= {false}
        key={idx}
      />)
    }
    )//end map
  }//end if
  else{
    weather = props.weatherIcons.map((item, idx) =>{
      let isSelected = false
      if (props.formData.weather===item.name) {isSelected = true}
      return(
      <IconButton
        updateCurrentForm={props.updateCurrentForm}
        isRadio='1'
        icon={item}
        type='weather'
        selected={isSelected}
        key={idx}
      />)
    }
  )//end map

  clothes = props.clothingIcons.map((item, idx) => {
      let isSelected = false
      props.formData.clothes.forEach( clothesItem => {
        if( item.name === clothesItem.name) {
          isSelected = true
          return
        }
      })
      return(
        <IconButton
          updateCurrentForm={props.updateCurrentForm}
          icon={item}
          type='clothes'
          selected={isSelected}
          key={idx}
        />)
      }
    )//end map
  }//end else


  return (
    <div>

     { props.update === false ?
          <form onSubmit={onSubmit}>

            <div className="weather">
              <h1>Weather</h1>
               {weather}
             </div>

            <div className="clothing">
              <h1>Clothing</h1>
             {clothes}
            </div>
            <label htmlFor="input-name">Name: </label>
            <input id="input-name" onChange={updateFields} type='text'  name='name'/>
            <label htmlFor="input-why">Why is this a good choice?: </label>
            <textarea id="input-why" onChange={updateFields} name='why' />
            <button type='submit'>Submit</button>
          </form>
      :
          <form onSubmit={onUpdate}>
            <div className="weather">
              <h1>Weather</h1>
               {weather}
             </div>

            <div className="clothing">
              <h1>Clothing</h1>
             {clothes}
            </div>
            <label htmlFor="input-name"> Name: </label>
            <input id="input-name" onChange={updateFields} type='text' name='name' value={props.formData.name}/>
            <label htmlFor="input-why">Why is this a good choice?: </label>
            <textarea id="input-why" onChange={updateFields} name='why' placeholder={props.formData.why}/>
            <button type='submit'>Update</button>
            <button onClick={deleteSubmission} name='delete'>Delete</button>
          </form>

        }
      </div>
)//end return


}//end SubmissionForm

export default SubmissionForm
