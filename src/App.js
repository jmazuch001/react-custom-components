import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import BadgeDesigner from './BadgeDesigner';
import Dashboard from './Dashboard';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Link} from "react-router-dom"
import { ArrowRight } from 'react-bootstrap-icons'
import styled, {ThemeProvider} from 'styled-components'
import Title from './components/Title'
import {DefaultButton, HipsterButton} from './components/Buttons';
import {Button} from '@material-ui/core'
import ComplexTitle from './components/ComplexTitle';
import AnotherComplexTitle from './components/AnotherComplexTitle'
import NavbarPrimary from './components/NavbarPrimary';
import BreatheAnim from './components/BreatheAnim'
import Card from './components/Card'
import ChangeStateButton from './state components/ChangeStateButton';
import GlobalStyles from './components/global-styles';
import Form from './components/Form'
import ResponsiveTopNav from './components/ResponsiveTopNav';
import ProgressBar from './components/Progress Bar/ProgressBar';
import MUITable from './components/MUI Tables/MUITable'
import NavbarSecondary from './components/Semantic UI Components/NavbarSecondary';
const StyledBtn = styled(Button)`
text-transform: capitalize;
`

const BaseTheme = {
    color: '#222',
    background: '#fff'
}

const DarkTheme = {
    color: '#fff',
    background: '#222'
}

const Container = styled.div`
padding: 2rem;
color: ${(props)=>props.theme.color};
background: ${(props)=>props.theme.background};

`

function App() {
    const [baseTheme, setTheme] = useState(true);
    const [showElement, setShowElement] = useState(true);
    
    
   
// functions go here
const handleClose = () => {
    setShowElement(false)
}

const toggleTheme = () => {
    setTheme(!baseTheme)
}
    return (
    <Router>
        
        <div className="App">
           {/* <Navbar /> */}
           <NavbarPrimary />
           {/* <NavbarSecondary /> */}
            {/* <ResponsiveTopNav/> */}
           {/* <BreatheAnim /> */}
           {/* <ThemeProvider theme={baseTheme === true ? BaseTheme : DarkTheme}>
                <Container>
                    <h1>Hello World</h1>
                    <button className='btn' onClick={toggleTheme}>Toggle Me</button>
                </Container>
                
           </ThemeProvider> */}
           
           {/* <div style={{ padding: '1rem'}}> */}
            {/* <Title special>Styled Component</Title>
            <Title>Styled Component w/o Special Prop Attached</Title>
            <DefaultButton>Click Me</DefaultButton>
            <HipsterButton>Clicketh Thy Hipster Button</HipsterButton>
            <StyledBtn color='primary' variant="contained">MUI Styled Button</StyledBtn>
            <Button color='primary' variant="contained">MUI Button</Button> */}
            {/* <ComplexTitle title='more complex title'></ComplexTitle>
            <AnotherComplexTitle title="another complex title another way"/> */}
            {/* <Card />
            <ProgressBar/> */}
           {/* </div> */}
            
            <Switch>
                <Route path="/" exact component={Home} />
                    
                
                <Route exact path="/badgedesigner" component={BadgeDesigner}/>
                    
                
                <Route exact path="/dashboard" component={Dashboard}/>
                
                
            </Switch>
            <Switch>

            </Switch>
            <section>
                {/* <ChangeStateButton /> */}
            </section>
            
        </div>
    </Router>
        
        
        
    );
    
}

export default App;

// Pay attention to the className, as it will make or break the import of App.css
// and the use of the components you're inserting into the div

// npm install react-router-dom --save

// type sfc + tab to make a component template