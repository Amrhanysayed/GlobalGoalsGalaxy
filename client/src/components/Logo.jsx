import React from 'react'
import { NavLink } from 'react-router-dom'

 function Logo () {
    return (
    <NavLink to="/">
        
        <img src="./src/images/logo.jpg"    alt="Logo" className="h-16 w-16 mr-2"  />
    </NavLink>
  )
}
 export default Logo; 


