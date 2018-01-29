import React from 'react'
import { mount } from 'enzyme'
import SubmissionForm from './SubmissionForm'
import Icon from '../Icon/Icon.js'

describe('SubmissionForm Componenet', () => {
 
  const weatherIcons = [
    {name:'Sun', url:'http://via.placeholder.com/100x100', type:'weather'},
    {name:'Rain', url:'http://via.placeholder.com/100x100', type:'weather' } 
  ]

  const clothingIcons = [
    {name:'Hat', url:'http://via.placeholder.com/100x100', type:'clothing'},
    {name:'Scarf', url:'http://via.placeholder.com/100x100', type:'clothing' } 
  ]

let component 
   beforeEach(() => {
    component = mount(
      
      <SubmissionForm 
        clothingIcons={clothingIcons}
        weatherIcons={weatherIcons} 
      />
    )
  })



  it('Should contain to icon subcomponents of the type weather in weather div', () => {
    expect(component
           .find('div.weather')
           .find(Icon)
           .everyWhere(n => n.props('[data-type="weather"]')))
           .toBe(true)
  })

  it('Should contain to icon subcomponents of the type clothing in clothing div', () => {
    expect(component
           .find('div.clothing')
           .find(Icon)
           .everyWhere(n => n.props('[data-type="clothing"]')))
           .toBe(true)
  })

}) 
