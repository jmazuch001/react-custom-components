import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'




const Progress = styled.div`
height: 100%; 
background-color: coral;
transition: width 0.6s;
`


export default function ProgressBar() {
const [filled, setFilled] = useState(0);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
    if(filled < 100 && isRunning) {
        setTimeout(() => setFilled(prev => prev += 2), 50);
    }
}, [filled, isRunning])


  return (
    <>
        <Progress>
            <div style={{width: `${filled}%`}}></div>
        </Progress>
        <span>{ filled }%</span>
        <button onClick={() => setIsRunning(true)}>Run</button>
    </>
    
  )
}
