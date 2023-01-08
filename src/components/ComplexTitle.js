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