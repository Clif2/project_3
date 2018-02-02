import React from 'react'
import {Link} from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaceing, color, greatFont, lightHeight, fontSize, openSans  } from '../../styles/base.css.js'




const Nav = () => {

  return (
    <nav className={css(style.header)}>
      <div>
        <h1 className={css(style.title)}> Weather Whiz </h1>
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
    backgroundColor: color.white,
    margin: '0 auto',
    display: 'flex',
    'justify-content': 'space-between',
    'align-content': 'center',
    'align-items': 'center',
    height: spaceing.s5,
    clear: 'both',
    padding: spaceing.s3,
    position: 'sticky',
    'top': '-1px',
    
     },
  
  title: {
    fontFamily: greatFont.fontFamily, 
    fontSize: fontSize.heading, 
    color: color.cdarkgrey  
  },
  
  navItems: {
    fontFamily: openSans.fontFamily, 
    fontSize: fontSize.body, 
    color: color.cdarkgrey,
    width: '75%', 
    display: 'flex', 
    'justify-content': 'flex-end',
    'align-content': 'center',
    'a': { 
      'text-align': 'center', 
      'vertical-align': 'middle'
     }
  }, 

  navLink: {
    'text-decoration': 'none',
    'padding-left': spaceing.s1
  }

})

