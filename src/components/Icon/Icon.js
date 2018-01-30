import React from 'react'

// functional component that returns an icon 

const Icon = ({updateCurrentForm, icon}) => {
  
  const onClick = e => {
  updateCurrentForm(icon.type, icon.name) 
  }

  return (
      <img 
        onClick={onClick}
        src={icon.url}
        alt={icon.name}
      />
  )

}

export default Icon
