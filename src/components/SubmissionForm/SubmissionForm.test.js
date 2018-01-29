import React from 'react'
import { mount } from 'enzyme'
import SubmissionForm from './SubmissionForm'

describe('SubmissionForm Componenet', () => {
 
  const weatherIcons = [
    {name:'Sun', url:'http://via.placeholder.com/100x100', type:'weather'},
    {name:'Rain', url:'http://via.placeholder.com/100x100', type:'weather' } 
  ]

  let component 
   beforeEach(() => {
    component = mount(<SubmissionForm weatherIcons={weatherIcons} />)
  })



  it('Should contain to icon subcomponents of the type weather', () => {
    expect(component.find('[data-type="weather"]')).toBe(2)
  }) 

}) 
