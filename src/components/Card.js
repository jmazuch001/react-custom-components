import React from 'react'
import styled from 'styled-components'

const Card = () => {
  return (
    <StyledCard>
      <img
        src='https://beanstalk-9fcd.kxcdn.com/wp-content/uploads/2022/07/star-citizen.jpg'
        alt='product'
      />
      <footer>
        <h4>Payload</h4>
        <p>Total: $10</p>
      </footer>
    </StyledCard>
  )
}

const StyledCard = styled.article`
width: 90vw;
max-width: 300px;
background: rgb(189, 189, 189);
border-radius: 0.25rem;
color: white;
box-shadow: 20px -11px navy;
/* box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, 
rgba(240, 46, 170, 0.3) -10px 10px, 
rgba(240, 46, 170, 0.2) -15px 15px, 
rgba(240, 46, 170, 0.1) -20px 20px, 
rgba(240, 46, 170, 0.05) -25px 25px; */

img{
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: 12px;
  h4{
  text-transform: capitalize;
  color: white;
  }
  h4:hover {
    color: green;
  }
  p{
    margin: 4px;
    color: var(--primary);
    font-weight: 700;
  }
  
}


h4{
  text-transform: capitalize;
  color: black;
  &::before{
    content: 'Name : ';
    color: red;
  }
}
@media (min-width:768px) {
  max-width: 600px;
}

/* to target the styled component/container itself */
/* add transition to overall styling */
transition: all 0.6s ease-in-out;

&:hover{
  box-shadow: rgba(219, 62, 0, 0.76) 4px -5px, 
rgba(219, 62, 0, 0.66) 8px -10px, 
rgba(219, 62, 0, 0.56) 12px -15px, 
rgba(219, 62, 0, 0.46) 16px -20px, 
rgba(219, 62, 0, 0.36) 20px -25px;
background: rgba(255, 93, 28, 0.49);
}
`

export default Card