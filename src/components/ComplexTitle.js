import React from 'react'
import styled from 'styled-components'


const ComplexTitle = ({ title }) => {
  return (
    <Wrapper className='bg-grey'>
        <h1>{title}</h1>
        <div className='underline'></div>
        {/* <div className='underline'></div>  */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin-right: auto;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1.8em;
    /* text-shadow: 0.1px 0.1px 3px #c44f4f; */
    background: -webkit-linear-gradient(rgb(54, 50, 50) 33%, rgb(238, 61, 7) 93%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
h1{
    text-transform: capitalize;
    text-align: center;
}
div{
    width: 50px;
    background: red;
    height: 5px;
    margin: 0 auto;
}
.underline{
    width: 5rem;
    background: var(--primary);
    height: 5px; 
    margin: 0 auto;
}


`

export default ComplexTitle