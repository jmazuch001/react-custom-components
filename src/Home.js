import React from 'react'
import { DefaultButton, HipsterButton } from './components/Buttons';
import StageOne from './components/MUI Forms/StageOne';
import MUITable from './components/MUI Tables/MUITable'

function Home() {
    return (
        
        // <div style={{padding: '2rem', backgroundColor: 'gray'}}>
        //     <h1 className='title'>Styled Components</h1>
        //     <button className='btn'>Click Me</button>
        //     {/* <DefaultButton>Something</DefaultButton>
        //     <HipsterButton>whoa</HipsterButton> */}
        // </div>
        <div>
            
            <MUITable/>
            <StageOne />
        </div>

    )
}

export default Home;