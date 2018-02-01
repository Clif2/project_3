/*
GL
*/
// import dep
import React from 'react'

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

    <div className='submission-item' style={props.style}>
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
