/*
GL
*/
// import dep
import React from 'react'

//import component icons
import Icon from '../Icon/Icon'



const SubmissionItem = props => {
      let clothing = props.input.clothes.map( (item, index) => {
          let theIcon = { url: item.imgURL,
                          name:item.name,
                          type:'clothing'}
                      return ( <Icon key={index}
                                    icon={theIcon}
                                    />)
                   })//end map

  return (

    <div className='submission-item'>
      <h3>When it's {props.input.weather} {props.input.name} wears:</h3>
      <div className='icon-list'>
        {clothing}
      </div>
      <p>because..."{props.input.why}"</p>

      <button onClick={()=>{props.handleUpdate(props.input._id)}}>Edit</button>
    </div>

  )

}

export default SubmissionItem
