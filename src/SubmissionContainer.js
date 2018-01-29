/*
GL
*/
import React, { Component } from 'react'

import Icon from './components/Icon/Icon'
import SubmissionForm from './components/SubmissionForm/SubmissionForm'
import SubmissionList from './components/SubmissionList/SubmissionList'

class SubmissionContainer extends Component {

  state = {
    inputs : [],
    formToggle: false
  }


//Toggles whether or not the form component is shwoing
  toggleForm = () => {
    this.setState({formToggle: !this.formToggle})
  }

  // FUNCTIONS TO HANDLE FORM SUBMISSION

  componentDidMount(){
    //make axios call to project3_API
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
