import React from 'react'

// functional component that returns an icon
const iconStyle = {
  height: '150px',
  width: '150px',
  borderRadius: '9px'
}

const Icon = ({icon}) => {

  return (
      <img
        style={iconStyle}
        src={icon.imgURL}
        alt={icon.name}
      />
  )

}

export default Icon
