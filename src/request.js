import axios from 'axios'

const url = 'https://project3api.herokuapp.com/'

//calls get(Input.find({})) 
export function getSubmittedForms() {
  return axios.get(url + 'input')
          .then(response => {
            console.log(response)
          })
  }

export function createSubmission(data) {
  return axios.post(url + 'input', date)
          .then(response => {
            console.log(response)
          })
  }


