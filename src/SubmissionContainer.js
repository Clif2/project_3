/*
GL & CP
*/
import React, { Component } from 'react'

import SubmissionForm from './components/SubmissionForm/SubmissionForm'
import SubmissionList from './components/SubmissionList/SubmissionList'
import axios from 'axios'



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
    console.log('componentDidMount');
    axios
    .get('https://project3api.herokuapp.com/weather')
    .then(response => {
      let weatherCopy = JSON.parse(JSON.stringify(this.state.weather))
      console.log(weatherCopy)
      weatherCopy = response.data
      this.setState((prevState) => {
        console.log(weatherCopy)
        return { weather : weatherCopy }
      })
    })
    //make axios call to project3_API
    // this.setState({inputs: testInputs})
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

  //Handles Submission

  handleSubmission = (nameSub, whySub) => {
    let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
    formCopy.name = nameSub
    formCopy.why = whySub
    this.setState((prevState) => {
      return {
        updateToggle: false,
        formToggle: false,
        currentForm: formCopy }
    })
  }

  render(){
    return (
      <div className='submission-container'>
        {this.state.formToggle? <SubmissionForm
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
