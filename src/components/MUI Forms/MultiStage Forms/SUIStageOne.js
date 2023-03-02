import React from 'react'
import {Form, Container, Input} from 'semantic-ui-react'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from "react-responsive";
import styled from 'styled-components'
import { RoundedButton } from './MUICustButton';

export function SUIStageOne() {
    return (
      <div>
        <Container>
        <NewForm>
          <NewForm.Group widths="equal">
            <h1>Step 1</h1>
            
              <NewForm.Field widths='equal'>
                <label>Enter Amount</label>
                <NewForm.Input placeholder="Enter Amount"/>
                <NewForm.Input label='First name'
        placeholder='First name'/>
              </NewForm.Field>
            
          </NewForm.Group>
          <RoundedButton>Text</RoundedButton>
        </NewForm>
         
         </Container>
      </div>
    );
  }
  
  const NewForm = styled(Form)`
    background-color: orange;
    text-align: center;
    padding: 1rem;
    /* width: 50%; */
    margin: 4rem 4rem 4rem 4rem;
    /* display: flex; */
    transition-property: all;
    background: lightgray;
    border-radius: 15px;
    background: linear-gradient(
      25deg,
      rgba(128, 128, 128, 1) 0%,
      rgba(56, 56, 56, 1) 49%,
      rgba(113, 113, 113, 1) 84%
    );
    color: coral;
  
    @media (max-width: 768px) {
      /* display: none; hides the component once it hits this viewport size */
      /* display: flex; */
      /* background-color: lightgray; */
      background: linear-gradient(
        25deg,
        rgba(128, 128, 128, 1) 0%,
        rgba(56, 56, 56, 1) 49%,
        rgba(113, 113, 113, 1) 50%
      );
      text-align: center;
      overflow: hidden;
      border-radius: 15px;
      /* margin: 1rem 1rem; */
margin: auto;     
      color: coral;
      border-end-start-radius: 80px 80px;
      /* opacity: 90%; */
      -webkit-box-shadow: -1px 3px 10px 0px rgba(0, 0, 0, 0.71);
      -moz-box-shadow: -1px 3px 10px 0px rgba(0, 0, 0, 0.71);
      box-shadow: -1px 3px 10px 0px rgba(0, 0, 0, 0.71);
    }
  
    h1 {
      text-align: center;
    }

  `;

  const NewInput = styled(Input)`
  padding: 8px;
  `
  