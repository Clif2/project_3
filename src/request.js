import axios from 'axios'

const url = 'https://project3api.herokuapp.com/'

//
//Form input calls 
//
export function getSubmittedForms() {
  return axios.get(url + 'input')
          .then(response => {
            console.log(response)
            return response.data
          })
  }

export function createSubmission(data)  {
  return axios.post(url + 'input', data)
          .then(response => {
            console.log(response)
          })
  }

export function updateSubmission( id, data ) {
  return axios.put(url + 'input/' + id, data )
          .then(response => {
            console.log(response)
          })
}

export function removeSubmission( id, data ) {
  return axios.delete(url + 'input/' + id, data )
          .then(response => {
            console.log(response)
          })
}

//
//Clothing calls
//



