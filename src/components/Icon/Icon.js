import React from 'react'

// functional component that returns and image with a data-type and data-name

const Icon = props => {
  
  const onClick = e => {
  props.updateCurrentForm(props.icon.type, props.icon.name) 
  }

  return (
      <img 
        onClick={onClick}
        src={props.icon.url}
      />
  )

}

export default Icon
