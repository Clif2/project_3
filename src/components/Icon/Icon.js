import React from 'react'

// functional component that returns and image with a data-type and data-name

const Icon = ({updateCurrentForm, icon}) => {
  
  const onClick = e => {
  updateCurrentForm(icon.type, icon.name) 
  }

  return (
      <img 
        onClick={onClick}
        src={icon.url}
      />
  )

}

export default Icon
