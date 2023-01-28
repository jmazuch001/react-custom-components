import React from 'react'
import { FormStageContainer } from './StageOne'

export default function StageTwo() {
  return (
    <FormBox >
        <FormStageContainer>
            <h1>
                Step 2
            </h1>
            <ul>
                <label>Selection Dropdown Goes Here</label>
                    <TextInput>Cargo Location</TextInput>
                <label>Selection Dropdown Goes Here</label>
                    <TextInput>Cargo Destination</TextInput>

            </ul>
            <div>
                <CornerButton variant="contained">Next Stage</CornerButton>
            </div>
        </FormStageContainer>
        
    </FormBox>
  )
}
