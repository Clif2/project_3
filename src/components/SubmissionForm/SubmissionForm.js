import React from 'react'

import IconButton from '../IconButton/IconButton.js'
import WeatherChoices from '../WeatherChoices/WeatherChoices.js'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing, color, greatFont, lightHeight, fontSize, openSans  } from '../../styles/base.css.js'



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
  //if the submit new input form
  if (!props.update){
    weather = props.weatherIcons.map((item, idx) =>{
    return(
      <IconButton
        updateCurrentForm={props.updateCurrentForm}
        // isRadio='1'
        icon={item}
        type='weather'
        selected= {false}
        key={idx}
      />)

    }
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
  //else the update input form
  else{
    weather = props.weatherIcons.map((item, idx) =>{
      let isSelected = false
      if (props.formData.weather===item.name) {isSelected = true}
      return(
      <IconButton
        updateCurrentForm={props.updateCurrentForm}
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
    <div className={css(styles.main)}>

     { props.update === false ?
          <form className={css(styles.outerGrid)} onSubmit={onSubmit}>

              <div className="weather">
                <h1>Weather</h1>
                <WeatherChoices weather={props.weatherIcons}
                              selectedWeather=''
                              updateCurrentForm={props.updateCurrentForm}
                              formData={props.formData}/>
              </div>
              <div className={css(styles.innerGrid)}>
                <div className={css(styles.innerCloths)}>
                  <h1>Clothing</h1>
                  {clothes}
                </div>
                <div className={css(styles.innerForm)}>
                  <div className={css(styles.textArea)}>
                    <label htmlFor="input-name">Name: </label>
                    <input id="input-name" onChange={updateFields} type='text'  name='name'/>
                    <label htmlFor="input-why">Why is this a good choice?: </label>
                    <textarea id="input-why" row="30" onChange={updateFields} name='why' />
                    <button className={css(styles.buttonSubmit)} type='submit'>Submit</button>
                  </div>
                </div>
              </div>
          </form>
      :
          <form className={css(styles.outerGrid)} onSubmit={onUpdate}>
            <div className="weather">
              <h1>Weather</h1>
             <WeatherChoices weather={props.weatherIcons}
                             selectedWeather={props.formData.weather}
                             updateCurrentForm={props.updateCurrentForm}
                             formData={props.formData}/>
             </div>
             <div className={css(styles.innerGrid)}>
                <div className={css(styles.innerCloths)}>
                 <div className="clothing">
                 <h1>Clothing</h1>
                {clothes}
               </div>
              </div>
            </div>
            <div className={css(styles.innerForm)}>
              <div className={css(styles.textArea)}>
                <label htmlFor="input-name"> Name: </label>
                <input id="input-name" onChange={updateFields} type='text' name='name' value={props.formData.name}/>
                <label  htmlFor="input-why">Why is this a good choice?: </label>
                <textarea id="input-why" onChange={updateFields} name='why' row="20" placeholder={props.formData.why}/>
                <button className={css(styles.buttonSubmit)} type='submit'>Update</button>
                {/* <button className={css(styles.buttonSubmit)} onClick={deleteSubmission} name='delete'>Delete</button> */}
             </div>
             </div>
              </form>

        }
      </div>
)//end return


}//end SubmissionForm
export default SubmissionForm

const styles = StyleSheet.create ({
  main: {
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr 1fr 1fr 1fr',
    'grid-template-rows': 'auto 1fr auto'
  },

  outerGrid: {
    'grid-column': '2 / 6',
    'grid-row': '2'
  },

  innerGrid: {
   display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr 1fr',
    'grid-template-rows': 'auto 1fr auto'
  },

  innerForm: {
    'grid-column': '1 / span 1',
    'grid-row': '1 / span 3',
    display: 'flex',
    'flex-direction': 'column',
   },

   textArea: {
      padding: spaceing.s1,
      outline: '0',
      height: '300px',
      border: '1px solid',
      borderColor: color.cdarkgrey,
      'border-radius': '2px',

      'line-height': '150%',

      ':hover, :focus': {
        'border-color': color.accent2

      }
    },

    label: {
    'margin-left': '0px',
    color: '#999999',
    },

    buttonSubmit: {
      width: 'auto',
      padding: spaceing.s2,
      background: color.accent,
      border: 0,
      fontSize: fontSize.body,
      fontWeight: '800',
      color: color.white
    }
  ,

  innerCloths: {
    'grid-column': '2 / span 3'
  }


})
