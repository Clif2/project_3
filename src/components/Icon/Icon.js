// import dep 
import React from 'react'
// functional component that returns and image with a data-type and data-name

const Icon = ({ icon }) => {

  return (
      <img 
        src={icon.url}
      />
  )

}


export default Icon
