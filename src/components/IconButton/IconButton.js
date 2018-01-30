
import React from 'react'

import Icon from '../Icon/Icon'


const IconButton = ({updateCurrentForm, icon}) => {

  const onClick = e => {
    // handleUpdate(icon.type, icon.name)
    updateCurrentForm(icon.type, icon.name)
  }

  return (
    <button onClick={onClick}>
      <Icon icon={icon}/>
    </button>

  )

}

export default IconButton
