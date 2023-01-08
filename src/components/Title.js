import { capitalize } from '@material-ui/core';
import styled from 'styled-components'

// tagged template literal
const BasicTitle = styled.h1`
    text-align: center;
    text-transform: capitalize;
    padding: 2rem;
    background-Color: lightblue;
    /* color: ${(props)=> props.special && 'red'}; this is the long way to write it*/
    /* color: ${(special)=> special && 'red'}; */
    color: ${({special})=> (special ? 'red' : 'blue')};
    
    `





export default BasicTitle