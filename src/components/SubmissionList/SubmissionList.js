/*
GL
*/
import React from 'react'

//import components
import SubmissionItem from '../SubmissionItem/SubmissionItem'


const SubmissionList = props => {
  let inputs = props.inputs.map( (input, index)=>
      {
        return ( <SubmissionItem key={index}
                                 input={input}
                                 handleUpdate={props.handleUpdate}/>)
      })



  return (
    <div>
     <h1>What's Your Weather Ware?</h1>  
      {inputs}
    </div>
  )

}

export default SubmissionList
