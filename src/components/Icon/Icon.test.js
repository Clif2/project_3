import React from 'react'
import { shallow, mount } from 'enzyme'

import Icon from './Icon'

//

describe('Icon Component', () => {
  const weatherIcon =
    { name: 'Sun',
      url: 'http://via.placeholder.com/100x100',
      type: 'weather'
    }

  let component
  let wrapper
  beforeEach(() => {
    component = shallow(<Icon icon={weatherIcon} />)
    wrapper = mount(<Icon icon={weatherIcon} />)
  })

  it('Should contain a image with a src from "via.placeholder"', () => {
    expect(component.type()).toEqual('img')
    expect(component.find('img').prop('src')).toEqual('http://via.placeholder.com/100x100')
  })

  it('Should have a data-attr of name and type', () => {
    expect(component.find('img').prop('data-name')).toEqual('Sun')
    expect(component.find('img').prop('data-type')).toEqual('weather')
    // avoid data-attributes in react, that's what state/props are for!
  })
})
