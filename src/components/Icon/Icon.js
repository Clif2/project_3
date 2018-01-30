import React from 'react'

const Icon = (icon) => {
  return (
      <img
        src={icon.url}
        alt={icon.name}
        data-name={icon.name}
        data-type={icon.type}
      />
  )

}

export default Icon
