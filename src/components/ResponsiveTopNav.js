import React from 'react'
import styled from 'styled-components'
import ResNavBurger from './ResNavBurger'
import ResNavMenuLinks from './ResNavMenuLinks'
import HIGROUPLogo from './HIGROUPLogo'
// responsive Top Navbar >> Responsive Hamburger Menu

const Nav = styled.nav`
  width: 100%; 
  height: 65px;
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
      <div>
        {/* <img src='/media content/HIG_Logo_Trans.png'/> */}
        
          <HIGROUPLogo />
       
      </div>
      <ResNavBurger/>
    </Nav>
  )
}

export default ResponsiveTopNav