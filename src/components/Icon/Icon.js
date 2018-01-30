import React from 'react'

// functional component that returns an icon

const Icon = ({icon}) => {

  return (
      <img
        style={icon.style}
        src={icon.imgURL}
        alt={icon.name}
      />
  )

}

export default Icon
