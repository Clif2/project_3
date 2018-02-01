
import React from 'react'

import Icon from '../Icon/Icon'


const IconButton = ({updateCurrentForm, icon, type}) => {

//Gwen--onClick
//check type
//if type is clothing and it is toggledOn send imgURL
//else send imgURL = ''

  const onClick = e => {
    updateCurrentForm(type, icon.name, icon.imgURL)
  }

  return (
    <button onClick={onClick}>
      <Icon icon={icon}/>
    </button>

  )

}

export default IconButton
