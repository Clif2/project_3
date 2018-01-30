/*
GL
*/
import React, { Component } from 'react'

import SubmissionForm from './components/SubmissionForm/SubmissionForm'
import SubmissionList from './components/SubmissionList/SubmissionList'

class SubmissionContainer extends Component {

  state = {
    inputs : [],
    formToggle: true, 
    icons: {
      weather: [
        {name:'Sun', url:'http://via.placeholder.com/100x100', type:'weather'},
        {name:'Rain', url:'http://via.placeholder.com/100x100', type:'weather' } 
      ],

      clothing: [
        {name:'Hat', url:'http://via.placeholder.com/100x100', type:'clothing'},
        {name:'Scarf', url:'http://via.placeholder.com/100x100', type:'clothing' } 
      ] 
    },

    currentForm: {
      weather: '',
      clothing: ''
    } 
  }


//Toggles whether or not the form component is shwoing
  toggleForm = () => {
    this.setState({formToggle: !this.formToggle})
  }

  // FUNCTIONS TO HANDLE FORM SUBMISSION

  componentDidMount(){
    //make axios call to fproject3_API
  }
  
  //Updates currentForm State on Click 
  
  updateCurrentForm = (type, name) => {
    //copying current state and make changes, 
    //basics of idea found at www.fourm.freecodecamp.org...
    //.../t/reactjs-using-state-to-update-single-property-on-an-object
    let formCopy = JSON.parse(JSON.stringify(this.state.currentForm)) 
    console.log(formCopy)
    formCopy[type] = name
    this.setState((prevState) => { 
      return {currentForm: formCopy}
   })

  } 
 //   setState( prevState => ({
//      currntForm: { e.target.type: e.target.name }
 //   })
 // }

  render(){
    return (
      <div className='submission-container'>
        {this.state.formToggle? <SubmissionForm 
                                    updateCurrentForm={this.updateCurrentForm} 
                                    clothingIcons={this.state.icons.clothing} 
                                    weatherIcons={this.state.icons.weather}
                                    /> 
                                    :
                                <SubmissionList inputs={this.state.inputs}
                                                toggleForm={this.toggleForm}/>}
      </div>
    )
  }

}

export default SubmissionContainer
