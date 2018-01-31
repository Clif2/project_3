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
		formToggle: true,
		updateToggle: false,
		currentID: '',

		weather: [],
		clothing: [],

		currentForm: {
			weather: '',
			clothing: '',
			name: '',
			why: ''
		}
	}

	//Toggles whether or not the form component is showing
	toggleForm = () => {
		this.setState({ formToggle: !this.state.formToggle })

}

	// toggleUpdate = () => {
	// 	this.setState({ updateToggle: !this.state.updateToggle })
	// }

	// when you click on Update Button in SubmissionList
	handleUpdate = id => {
		console.log('id=> ' + id)
		console.log('currrent inputs: ', this.state.inputs)
		let submission = this.state.inputs.filter(
			submissions => (submissions._id = id)
		)
		console.log(submission)
		this.setState({
			formToggle: true,
			updateToggle: true,
			currentID: id,
			currentForm: submission[0]
		})
	}

	// FUNCTIONS TO HANDLE FORM SUBMISSION

	componentDidMount() {
		//get all inputs
		getSubmittedForms().then(data => {
			this.setState(prevState => {
				// console.log('getSumittedForms: ', data)
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

	// componentWillUpdate(prevProps, prevState) {
	// 	if (!this.state.formToggle)
	// 	{
	// 		console.log('getting data');
	// 		getSubmittedForms().then(data => {
	// 				this.setState(prevState => {
	// 					console.log('getSumittedForms: ', data)
	// 					return { inputs: data }
	// 				})
	// 		})
	// 	}
		// console.log('checking', prevState.inputs.length, this.state.inputs.length)
		// if (prevState.inputs.length !== this.state.inputs.length) {
		// 	getSubmittedForms().then(data => {
		// 		this.setState(prevState => {
		// 			console.log('getSumittedForms: ', data)
		// 			return { inputs: data }
		// 		})
		// 	})
		// }
	//}

	//Updates currentForm State on Click

	updateCurrentForm = (type, name) => {
		//copying current state and make changes,
		//basics of idea found at www.fourm.freecodecamp.org...
		//.../t/reactjs-using-state-to-update-single-property-on-an-object
		let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
		console.log('updateCurrentFrom copy: ', formCopy)
		formCopy[type] = name
		this.setState(prevState => {
			return { currentForm: formCopy }
		})
	}

	updateCurrentFromFields = (field, value) => {
		let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
		formCopy[field] = value
		console.log(formCopy)
		this.setState(prevState => {
			return { currentForm: formCopy }
		})
	}

	//Handles Submission

	// handleForcedUpdate = () => {
	// 	this.forceUpdate
	// }

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
		removeSubmission(this.state.currentID)
		this.setState({
			currentID: '',
			formToggle: false
		})
	}

	handleSubmission = (nameSub, whySub) => {
		//copies currnet form
		// let formCopy = JSON.parse(JSON.stringify(this.state.currentForm))
		// formCopy.name = nameSub
		// formCopy.why = whySub

//should createSubmission
//then get the new list of inputs from the db
//then set state
console.log('handleSubmission');
		 createSubmission(this.state.currentForm).then(()=>{
			 console.log('createdSubmission')
			 getSubmittedForms().then(inputs => {
				 console.log('gotsubmittedform')
				 this.setState(prevState => {
					 return {
						 updateToggle: false,
						 formToggle: false,
						 inputs: inputs
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
		this.setState(prevState => {
			return {
				updateToggle: false,
				formToggle: false
				//currentForm: formCopy
			}
		}, this.updateFormData())
	}

	render() {
		return (
			<div className="submission-container">
				{this.state.formToggle ? (
					<SubmissionForm
						update={this.state.updateToggle}
						name={this.state.currentForm.name}
						why={this.state.currentForm.why}
						clothingIcons={this.state.clothing}
						weatherIcons={this.state.weather}
						handleUpdate={this.handleSubmissionUpdate}
						handleSubmission={this.handleSubmission}
						handleDelete={this.handleDelete}
						updateCurrentForm={this.updateCurrentForm}
						updateFields={this.updateCurrentFromFields}
						forceUpdate={this.handleForceUpdate}
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
