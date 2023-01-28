import React from 'react'

export default function StageTwo() {
  return (
    <FormBox >
        <FormStageContainer>
            <h1>
                Step 3
            </h1>
            <ul>
                <label>Input Field for Value Calculation Goes Here</label>
                    <TextInput></TextInput>
                <label>Returns Player Split of Sale Valuation</label>
                    <TextInput></TextInput>
            </ul>
            <div>
                <CornerButton variant="contained">Next Stage</CornerButton>
            </div>
        </FormStageContainer>
        
    </FormBox>
  )
}

