import React from 'react'
import { DefaultButton } from './Buttons'
import styled from 'styled-components'

const Button = styled.button.attrs((props) => {
  return { type: props.type || 'button' }
})`
background: gray;
border: none;
color: white;
padding: 0.25rem;
cursor: pointer;
`

export default function Form() {
  return (
    <div>
        <h2>
            Some random stuff
        </h2>
        <Button>click this form button</Button>
        <form
        css={`
        width: 300px;
        background: gray;
        padding: 2rem;
        margin-top: 1rem;
        `}
        >
        <h2>Form</h2>
        <input type='text' />
        <DefaultButton type='submit'></DefaultButton>
        </form>
    </div>
  )
}

