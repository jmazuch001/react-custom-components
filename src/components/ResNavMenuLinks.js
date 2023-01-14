import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import ComplexTitle from './ComplexTitle'


const MenuUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;


    
    li {
      padding: 18px 10px;
      /* transition: 2.3s; */
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        /* animation: 1s stretch; */
        /* background: linear-gradient(25deg, rgba(0,0,0,1) 0%, rgba(75,0,0,1) 41%, rgba(0,0,0,1) 42%, rgba(0,0,0,1) 44%, rgba(116,1,1,1) 67%, rgba(0,0,0,1) 68%);                 */
        /* transition: 4.0s; */
        background: linear-gradient(25deg, rgba(0,0,0,1) 29%, 
        rgba(0,0,0,1) 33%, 
        rgba(232,60,0,1) 35%, 
        rgba(0,0,0,1) 52%, 
        rgba(1,21,116,1) 55%, 
        rgba(0,0,0,1) 77%);

        background-size:  300% 300%;
        animation: gradient 10s ease infinite; 

        li {
            color: coral;
            /* transition: 0.5s; */
        }
        li:hover {
            text-shadow: 2px 1px 4px rgba(255,255,255,0.3);
            font-size: 25px;
            transition: 0.5s;
            transition-timing-function: ease-in-out;
            color: #FF4520;
        }
        
        .div {
            transition: 0.5s;
            border-radius: 12px;
            width: 90%;
            transition-timing-function: ease-in-out;
            
        }
        .div:hover {
            transform: translateY(10px);
            background: white;
            /* transition: 0.5s; */
            /* transition-delay: 0.5s; */
            transition-timing-function: ease-in-out;
            padding: 5px;
            border-radius: 17.5px;
            width: 90%;
            opacity: 55%;
            /* transform: translateY(7px); */
            /* background: linear-gradient(25deg, rgba(0,0,0,1) 19%, rgba(92,0,0,1) 22%, rgba(0,0,0,1) 26%); */
        }
        @keyframes gradient {
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
}
        /* li:hover:after {
            text-shadow: 2px 1px 4px rgba(255,255,255,0.3);
            font-size: 25px;
            transition-delay: 1s;
            transition-timing-function: ease-out;
            color: #FF4520;
        } */
    }
`

const ResNavMenuLinks = ({ open }) => {
  return (
    <MenuUl open={open}>
        <section>
            <Typography>123 Investment Group, LLC.</Typography>
        </section>
        <li className='div'>Home</li>
        <li className='div'>About us</li>
        <li className='div'>Contact Us</li>
        <li className='div'>Sign In</li>
        <li className='div'>Div</li>
    </MenuUl>
  )
}

export default ResNavMenuLinks

// this component is production ready as of 1/9/2022
// baked-in animations and texture changes will remain intact pending necessary
// clean-up for production use
// Animations included for gradient