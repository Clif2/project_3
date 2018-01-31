/*
GL & CP
*/
import React, { Component } from 'react'

import SubmissionForm from './components/SubmissionForm/SubmissionForm'
import SubmissionList from './components/SubmissionList/SubmissionList'
import axios from 'axios'

import { getSubmittedForms, 
         createSubmission,
         updateSubmission
       } from './request.js' 


let testInputs = [

{
  _id: '1',
  weather: 'Sunny',
  name: 'Josh',
  clothes: [{
    name: 'Sunglasses',
    imgURL: 'https://tinyurl.com/y9gvv5l6'
  }],
  why: "Becaus its brite"  },

  {
    _id: '2',
    weather: 'Cold',
    name: 'Melody',
    clothes: [
      {
        name: 'Coat',
        imgURL: 'https://tinyurl.com/y73odabj'
      },
      {
        name: 'Hat',
        imgURL: 'https://tinyurl.com/ydxohys4'
        // "http://via.placeholder.com/150x150"
      }
    ],
    why: "to stay warm"}
]



class SubmissionContainer extends Component {

  state = {
    inputs : [],
    formToggle: true,
    updateToggle: false,
    currentID: '',


    weather: [],
    clothing: [
        {name:'Hat', imgURL:'https://tinyurl.com/ydxohys4', type:'clothing'},
        {name:'Scarf', imgURL:'https://tinyurl.com/yb7y3ge3', type:'clothing' }
    ],


    currentForm: {
      weather: '',
      clothing: '',
      name: '',
      why: ''
    }
  }


//Toggles whether or not the form component is showing
  toggleForm = () => {
    this.setState({formToggle: !this.state.formToggle})
  }

  toggleUpdate = () => {
    this.setState({updateToggle: !this.state.updateToggle})
  }

// when you click on Update Button in SubmissionList
  handleUpdate = (id) => {
    console.log('id=>'+id);
    this.setState({ formToggle: true,
                    updateToggle: true,
                    currentID: id})
  }

  // FUNCTIONS TO HANDLE FORM SUBMISSION
  
  componentDidMount(){
     
    //get submitted forms 
    getSubmittedForms()
      .then(data => {
        this.setState(prevState => {
          console.log('getSumittedForms: ', data) 
          return { input : data}
        })
    })

    //get weather data and icons
    console.group('Weather API')
    axios 
    .get('https://project3api.herokuapp.com/weather')
    .then(response =>{
      console.log('api call repsonse :', response )
      this.setState((prevState) => {
        console.table(response.data)
        return { weather : response.data }
      })
    })
    console.groupEnd()
  }

  compnentDidUpdate(prevProps, prevState){
    
    if (prevState.currentID != this.state.currentID) {
      console.log('currentID changed!')
    } 

  }

  //Updates currentForm State on Click

  updateCurrentForm = (type, name) => {
    //copying current state and make changes,
    //basics of idea found at www.fourm.freecodecamp.org...
    //.../t/reactjs-using-state-to-update-single-property-on-an-object
    let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
    console.log('updateCurrentFrom copy: ',formCopy)
    formCopy[type] = name
    this.setState((prevState) => {
      return {currentForm: formCopy}
   })

  }
  
  //Handles Submission 

  submitFormData = () => {
    console.log('Submit Form Data Fired')
    createSubmission(this.state.currentForm)
  }

  updateFormDate = () => {
    console.log('Update Form Fired')
    updateSubmission( this.state.currentID, this.state.currentForm )
  }

  handleSubmission = (nameSub, whySub) => {
    //copies currnet form
    let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
    formCopy.name = nameSub
    formCopy.why = whySub
    
    this.setState((prevState,) => {
      return { 
        updateToggle: false,
        formToggle: false,
        currentForm: formCopy }
    }, this.submitFormData())
  }


  //Handles Updating Input 
   handleUpdate = (nameSub, whySub) => {
     let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
     formCopy.name = nameSub
     formCopy.why = whySub
    
     this.setState((prevState,) => {
       return { 
         updateToggle: false,
         formToggle: false,
         currentForm: formCopy }
     }, this.updateFormData())
    }   
    

  render(){
    return (
      <div className='submission-container'>
        {this.state.formToggle? <SubmissionForm
                                    update={this.state.updateToggle}
                                    handleSubmission={this.handleSubmission}
                                    name={this.state.currentForm.name}
                                    why={this.state.currentForm.why}
                                    updateCurrentForm={this.updateCurrentForm}
                                    clothingIcons={this.state.clothing}
                                    weatherIcons={this.state.weather}
                                />
                                :
                                <SubmissionList inputs={this.state.inputs}
                                                toggleForm={this.toggleForm}
                                                handleUpdate={this.handleUpdate}/>}
      </div>
    )
  }

}

export default SubmissionContainer
