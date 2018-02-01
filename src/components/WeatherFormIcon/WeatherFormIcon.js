import React from 'react'
 
 // functional component that returns an icon
 
 
const WeatherFormIcon = ({icon}) => {    
 
const iconStyle = {
    height: '150px',
   width: '150px',
   borderRadius: '9px'
} 
 
const hiddenInput = {  
   marging: '0',        
   padding: '0',        
   appearance: 'none', 
   visibility: 'hidden'
} 
 
 
 
  return (          
      <div>          
       <input style={hiddenInput} id={icon.name} type='radio' name={icon.name} 
    />
     <img src={icon.imgURL} style={iconStyle} />
     </div>          
   )                  
 
}    

export default WeatherFormIcon
                           
