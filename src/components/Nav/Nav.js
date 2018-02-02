import React from 'react'
import {Link} from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing } from '../../styles/base.css.js'




const Nav = () => {

  return (
    <nav className={css(style.header)}>
      <div>
        <h1> Weather Whiz </h1>
      </div>
      {/* //for now Home automatically redirects to /submissions */}
      <div className={css(style.navItems)}>
        <Link className={css(style.navLink)} to='/'>Home</Link>
        <Link className={css(style.navLink)} to='/submissions'>Submissions</Link>
        <Link className={css(style.navLink)} to='/about'>About</Link>
      </div>
    </nav>
  )

}

export default Nav

const style = StyleSheet.create ({
  header: {
    width: '75%',
    margin: '0 auto',
    display: 'flex',
    'justify-content': 'space-between',

    height: spaceing.s5,
    clear: 'both',
    padding: spaceing.s3,
    'margin-bottom': spaceing.s5,
    position: 'sticky',
    'top': '-1px'
  },
  
  title: {
  },
  
  navItems: {
    width: '75%', 
    display: 'flex', 
    'justify-content': 'flex-end'
  },

  navLink: {
    'text-decoration': 'none',
    'padding-left': spaceing.s1
  }

})

