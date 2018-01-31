
import React from 'react'

import Icon from '../Icon/Icon'


const IconButton = ({updateCurrentForm, icon, type}) => {

  const onClick = e => {
    updateCurrentForm(type, icon.name)
  }

  return (
    <button onClick={onClick}>
      <Icon icon={icon}/>
    </button>

  )

}

export default IconButton
