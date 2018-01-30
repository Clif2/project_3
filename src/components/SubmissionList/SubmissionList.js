/*
GL
*/
// import dep
import React from 'react'

//import component icons

import Icon from '../Icon/Icon'
// create class SubmissionForm





const SubmissionList = props => {
  console.log(props.inputs);
  let inputs = props.inputs.map( (input, index)=>
      {
          let clothing = input.clothes.map( (item, index) => {
                          return ( <Icon key={index}
                                        url={item.imgURL}
                                       name={item.name}
                                       type='clothing'/>)
                       })

        return (
          <div key={index} className='input' data-input={input._id}>
            <h3>{input.weather}</h3>
            <div className='icon-list'>
              {clothing}
            </div>
            <p>{input.name}</p>
            <p>{input.why}</p>
          </div>)
      })


  return (
    <div>
      "Hello SubmissionList"
      {inputs}
    </div>
  )

}

export default SubmissionList
