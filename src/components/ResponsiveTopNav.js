import React from 'react'
import styled from 'styled-components'
import ResNavBurger from './ResNavBurger'
import ResNavMenuLinks from './ResNavMenuLinks'

// responsive Top Navbar >> Responsive Hamburger Menu

const Nav = styled.nav`
  width: 100%; 
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;


  .logo{
    padding: 15px 0;
  }
  

`



const ResponsiveTopNav = () => {
  return (
    <Nav>
      <div className='logo'>
        Nav bar
      </div>
      <ResNavBurger/>
    </Nav>
  )
}

export default ResponsiveTopNav