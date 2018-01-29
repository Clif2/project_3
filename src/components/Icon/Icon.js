// import dep 
import React from 'react'
// functional component that returns and image with a data-type and data-name

const Icon = ({ icon }) => {

  return (
      <img 
        src={icon.url}
        data-name={icon.name}
        data-type={icon.type}
      />
  )

}

export default Icon
