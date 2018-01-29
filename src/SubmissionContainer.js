/*
GL
*/
import React, { Component } from 'react'

import Icon from './components/Icon/Icon'
import SubmissionForm from './components/SubmissionForm/SubmissionForm'
import SubmissionList from './components/SubmissionList/SubmissionList'


// const InputSchema = new mongoose.Schema({
//   weather: String,
//   name: String,
//   clothes: [{
//     name: String,
//     imgURL: String
//   }],
//   why: String
// })


let testInputs = [
{weather: 'Sunny',
  name: 'Josh',
  clothes: [{
    name: 'Sunglasses',
    imgURL: "http://via.placeholder.com/150x150"
  }],
  why: "Becaus its brite"},
  {weather: 'Cold',
    name: 'Melody',
    clothes: [
      {
        name: 'Coat',
        imgURL: "http://via.placeholder.com/150x150"
      },
      {
        name: 'Hat',
        imgURL: "http://via.placeholder.com/150x150"
      }
    ],
    why: "to stay warm"},

]





class SubmissionContainer extends Component {

  state = {
    inputs : [],
    formToggle: false
  }


//Toggles whether or not the form component is showing
  toggleForm = () => {
    this.setState({formToggle: !this.formToggle})
  }

  // FUNCTIONS TO HANDLE FORM SUBMISSION

  componentDidMount(){
    //make axios call to project3_API
    this.setState({inputs: testInputs})
  }

  render(){
    return (
      <div className='submission-container'>
        {this.state.formToggle? <SubmissionForm/> :
                                <SubmissionList inputs={this.state.inputs}
                                                toggleForm={this.toggleForm}/>}
      </div>
    )
  }

}

export default SubmissionContainer
