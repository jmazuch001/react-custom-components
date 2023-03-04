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

  section {
      /* float: left; */
      text-decoration: none;
      /* margin-top: 10px; */
      text-align: center;
      margin-left: 3rem;

      h4 {
      float: left;
      color: #80d5e8;
      background-image: -webkit-radial-gradient(circle, #80d5e8 0%,#045d8c 100%,#ffffff 100%);
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
      -webkit-text-fill-color: transparent;

      padding: 12px;
      font-size: 20px;
      }
    }
    @media (max-width: 768px) {
      h4 {
        display: none;
      }
    }

`



const ResponsiveTopNav = () => {
  return (
    <Nav>
      <div>
        {/* <img src='/media content/HIG_Logo_Trans.png'/> */}
        
          <HIGROUPLogo />
          
      </div>
        <section>
          <h4>Hellstrom Investment Group, LLC.</h4>
        </section>
      <ResNavBurger/>
    </Nav>
  )
}

export default ResponsiveTopNav