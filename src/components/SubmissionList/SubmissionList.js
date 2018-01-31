/*
GL
*/
import React, { Component } from 'react'

//import components
import SubmissionItem from '../SubmissionItem/SubmissionItem'

const evenStyle = {
  background: 'white'
}
const oddStyle = {
  background: 'grey'
}

const SubmissionList = props => {
  let inputs = props.inputs.map( (input, index)=>
      {
        let style = {}
        if(index%2) {style=evenStyle}
        else {style=oddStyle}
        return ( <SubmissionItem key={index}
                                 style={style}
                                 input={input}
                                 handleUpdate={props.handleUpdate}/>)
      })


  return (
    <div>
     <h1>What's Your Weather Ware?</h1>
     <button onClick={props.toggleForm}>Add Your Own Idea!</button>
      {inputs}
    </div>
  )

}

export default SubmissionList
