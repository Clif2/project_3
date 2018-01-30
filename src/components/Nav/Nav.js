import React from 'react'
import {Link} from 'react-router-dom'



const Nav = () => {

  return (
    <nav>
      Weather Whiz Nav
      {/* //for now Home automatically redirects to /submissions */}
      <Link to='/'>Home</Link>
      <Link to='/submissions'>Submissions</Link>
      <Link to='/about'>About</Link>
    </nav>
  )

}

export default Nav
