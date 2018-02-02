/*
GL & CP
*/
import React, { Component } from 'react'

import SubmissionForm from './components/SubmissionForm/SubmissionForm'
import SubmissionList from './components/SubmissionList/SubmissionList'
import axios from 'axios'

import {
	getSubmittedForms,
	createSubmission,
	updateSubmission,
	removeSubmission
} from './request.js'
// } from './request.js'

class SubmissionContainer extends Component {
	state = {
		inputs: [],
		formToggle: false,
		updateToggle: false,
		currentID: '',

		weather: [],
		clothing: [],

		currentForm: {
			weather: '',
			clothes: [],
			name: '',
			why: ''
		}
	}

	//Toggles whether or not the form component is showing
	toggleForm = () => {
		this.setState({ formToggle: !this.state.formToggle })

}

	toggleUpdate = () => {
		this.setState({ updateToggle: !this.state.updateToggle })
	}

	// when you click on Update Button in SubmissionList
	handleUpdate = id => {
			axios.get('https://project3api.herokuapp.com/input/'+id)
					 .then(response => {
							this.setState(prevState => {
								return {
									formToggle: true,
									updateToggle: true,
									currentID: id,
									currentForm: response.data
								}
							})
					})
	}

	// FUNCTIONS TO HANDLE FORM SUBMISSION

	componentDidMount() {
		//get all inputs
		getSubmittedForms().then(data => {
			this.setState(prevState => {
				return { inputs: data }
			})
		})

		//get weather data and icons
		axios.get('https://project3api.herokuapp.com/weather')
				 .then(response => {
							this.setState(prevState => {
														return { weather: response.data }
			})
		})

		//get clothes data and icons
		//console.group('Clothes API')
		axios.get('https://project3api.herokuapp.com/clothing').then(response => {
			// console.log('api call repsonse :', response )
			this.setState(prevState => {
				// console.table(response.data)
				return { clothing: response.data }
			})
		})
		// console.groupEnd()
	}


	//Updates currentForm State on Click

	updateCurrentForm = (type, name, imgURL) => {
		//copying current state and make changes,
		//basics of idea found at www.fourm.freecodecamp.org...
		//.../t/reactjs-using-state-to-update-single-property-on-an-object
		let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
		//console.log('updateCurrentFrom copy: ', formCopy)
		if(type === 'weather'){
			if (imgURL)
			{
				formCopy[type] = name
			}
			else {
				formCopy.weather = ''}
		}
		else if(type === 'clothes'){
			// console.log('the imgURL =>' +imgURL);
			//if imgURL present then push item on list
			if (imgURL)
			{
				formCopy.clothes.push({ name: name,
														imgURL: imgURL})
			}
			else {
				// console.log('we are deleting in updateCurrentForm');
				 //if imgURL not present remove item from clothes array
				 formCopy.clothes = formCopy.clothes.filter( (item) => {
				 		return item.name !== name})
			}
		}

		this.setState(prevState => {
			return { currentForm: formCopy }
		})
	}

	updateCurrentFromFields = (field, value) => {
		let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
		formCopy[field] = value
		// console.log('updateCurrentFromFields');
		// console.log(formCopy)
		this.setState(prevState => {
			return { currentForm: formCopy }
		})
	}

//Handles Submission

//-------------------------------------------------------
//FIX --i dont think these two functions are necessary
	submitFormData = () => {
		// console.log('Submit Form Data Fired')
		// console.table(this.state.currentForm)
		createSubmission(this.state.currentForm)
	}

	updateFormData = () => {
		// console.log('Update Form Fired')
		// console.table(this.state.currentForm)
		updateSubmission(this.state.currentID, this.state.currentForm)
	}
//-------------------------------------------------------

	//validates the form fields so that at least 1 weather, 1 clothing, & a name exists
	formValidator = () => {
		if (this.state.currentForm.weather
				&& this.state.currentForm.clothes.length > 0
				&& this.state.currentForm.name)
		{
				return true
		}
		else { return false }

	}//end formValidator

	handleDelete = () => {
		// console.log('DELETED :', this.state.currentID)
		removeSubmission(this.state.currentID).then(()=>{
			getSubmittedForms().then(inputs => {
				// console.log('gotsubmittedform')
				// console.log(inputs);
				this.setState(prevState => {
					return {
						updateToggle: false,
						formToggle: false,
						inputs: inputs,
						currentID: '',
						currentForm: {
							weather: '',
							clothes: [],
							name: '',
							why: ''
						}
					}//end return
				})//end setState
			})//end then getSumittedForms
		})//end removeSubmission
	}//end handleDelete

	handleSubmission = () => {
		//copies currnet form
		// let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
		// formCopy.name = nameSub
		// formCopy.why = whySub

/*
should validate form
then createSubmission
then get the new list of inputs from the db
then set state
*/
	if (!this.formValidator() )return

		 createSubmission(this.state.currentForm).then(()=>{
			 console.log('createdSubmission')
			 getSubmittedForms().then(inputs => {
				 console.log('gotsubmittedform')
				 console.log(inputs);
				 this.setState(prevState => {
					 return {
						 updateToggle: false,
						 formToggle: false,
						 inputs: inputs,
						 currentID: '',
 						currentForm: {
							weather: '',
							clothes: [],
							name: '',
							why: ''
						}
					 }//end return
				 })//end setState

			 })//end then getSumittedForms

		})//end then createSubmission

	}//end handleSubmission

	//Handles Updating Input
	handleSubmissionUpdate = () => {
		if (!this.formValidator() )return
		updateSubmission(this.state.currentID, this.state.currentForm)
			.then(()=>{
				// console.log('updatedSubmission')
				getSubmittedForms().then(inputs => {
					// console.log('gotsubmittedform')
					this.setState(prevState => {
						return {
							updateToggle: false,
							formToggle: false,
							inputs: inputs,
							currentID: '',
							currentForm: {
								weather: '',
								clothes: [],
								name: '',
								why: ''
							}
						}//end return
					})//end setState

				})//end then getSumittedForms

			})//end then updateSubmission

	}

	render() {
		return (
			<div className="submission-container">
				{this.state.formToggle ? (
					<SubmissionForm
						update={this.state.updateToggle}
						formData={this.state.currentForm}
						name={this.state.currentForm.name}
						why={this.state.currentForm.why}
						clothingIcons={this.state.clothing}
						weatherIcons={this.state.weather}
						handleUpdate={this.handleSubmissionUpdate}
						handleSubmission={this.handleSubmission}
						handleDelete={this.handleDelete}
						updateCurrentForm={this.updateCurrentForm}
						updateFields={this.updateCurrentFromFields}
						// forceUpdate={this.handleForceUpdate}
					/>
				) : (
					<SubmissionList
						inputs={this.state.inputs}
						toggleForm={this.toggleForm}
						handleUpdate={this.handleUpdate}
					/>
				)}
			</div>
		)
	}
}

export default SubmissionContainer
