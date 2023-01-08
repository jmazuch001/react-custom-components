import React from 'react'
import styled from 'styled-components'
import {colors} from '../utils'
const AnotherComplexTitle = ( {title, className} ) => {
    return (
        <div className={className}>
            <h1>{ title }</h1>
            {/* the <div> below is for an underline */}
            <div></div>
        </div>
    )
}

const AnotherWrapper = styled(AnotherComplexTitle)`
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
    background: ${colors.primary};
    height: 5px; 
    margin: 0 auto;
}
`

export default AnotherWrapper;