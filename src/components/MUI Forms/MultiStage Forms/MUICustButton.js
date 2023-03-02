import React from 'react'

import {Button} from 'semantic-ui-react'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from "react-responsive";
import styled from 'styled-components'

export default function SUICustButton() {
  return (
    <div>
        <RoundedButton>Rounded Button</RoundedButton>
    </div>
  )
}

export const RoundedButton = styled(Button)`
background-color: coral;
  color: white;
  border: none;
  padding: 5px;
  font-size: 20px;
  height: 60px;
  width: 120px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 30%;
  margin-left: auto;
    margin-right: auto;
`
