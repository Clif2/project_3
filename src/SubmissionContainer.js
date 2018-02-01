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
				 console.log('getSumittedForms: ', data)
				return { inputs: data }
			})
		})

		//get weather data and icons
		// console.group('Weather API')
		axios.get('https://project3api.herokuapp.com/weather').then(response => {
			// console.log('api call repsonse :', response)
			this.setState(prevState => {
				// console.table(response.data)
				return { weather: response.data }
			})
		})
		// console.groupEnd()

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
		console.log('updateCurrentFrom copy: ', formCopy)
		if(type === 'weather'){
			formCopy[type] = name
		}
		else if(type === 'clothes'){
			formCopy.clothes.push({ name: name,
														imgURL: imgURL})
		}

		this.setState(prevState => {
			return { currentForm: formCopy }
		})
	}

	updateCurrentFromFields = (field, value) => {
		let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
		formCopy[field] = value
		console.log('updateCurrentFromFields');
		console.log(formCopy)
		this.setState(prevState => {
			return { currentForm: formCopy }
		})
	}

	//Handles Submission

//FIX --i dont think these functions are necessary
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



			// this.setState({
			// 	currentID: '',
			// 	formToggle: false,
			// 	updateToggle: false
			// })
		})//end removeSubmission
	}

	handleSubmission = (nameSub, whySub) => {
		//copies currnet form
		// let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
		// formCopy.name = nameSub
		// formCopy.why = whySub

/*
should createSubmission
then get the new list of inputs from the db
then set state
*/

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
	handleSubmissionUpdate = (nameSub, whySub) => {
		//let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
		//formCopy.name = nameSub
		//formCopy.why = whySub
		//console.table(formCopy)
		// this.setState(prevState => {
		// 	return {
		// 		updateToggle: false,
		// 		formToggle: false
		// 		//currentForm: formCopy
		// 	}
		// }, this.updateFormData())

		updateSubmission(this.state.currentID, this.state.currentForm)
			.then(()=>{
				console.log('updatedSubmission')
				getSubmittedForms().then(inputs => {
					console.log('gotsubmittedform')
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
