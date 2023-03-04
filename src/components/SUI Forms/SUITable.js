import * as React from 'react';
// import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from "react-responsive";
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { Icon, Table, Container  } from 'semantic-ui-react'


export default function BasicTable() {
  return (
    
    <div>
      <CustomBox>
        
      <CustomTableContainer >
      <h1>Project Overview</h1>
      <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>Git Repository</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Icon name='folder' /> node_modules
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell collapsing textAlign='right'>
          10 hours ago
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon name='folder' /> test
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon name='folder' /> build
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon name='file outline' /> package.json
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon name='file outline' /> Gruntfile.js
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  {/* <hr></hr> */}
        <MediaQuery query="(max-device-width: 1024px)">
          <></>
        </MediaQuery>
    </CustomTableContainer>
    </CustomBox>
  </div>  
  );
}


const CustomTableContainer = styled(Container)`
padding-top: 1rem;
margin: auto;
width: 100%;
height: 100%;
/* border: solid; */
/* border-color: coral; */
border-collapse: collapse;
/* background-color: blue; */
border-radius: 10px 100px / 120px;

/* hr {
  background-color: red;
  transition: 1s;
  padding: 13px;
  border-radius: 45%;
  border-style: dashed  ;

}

hr:hover {
  animation-play-state: running;
  background-color: green;
  transition: 1s;
  animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
  border-radius: 45%;
  border-style: solid;
} */
h1 {
  text-align: center;
  text-shadow: -1px 1px 1px rgb(38, 57, 77);
  color: white;
}
@media (max-width: 768px) {
  display: flex;
  flex-flow: column nowrap;
  color: coral;
  text-align: left;
}
`

const CustomBox = styled.div`
background-color: gray;
padding: 0.2rem;
/* width: 50%; */
margin: 2rem 2rem 2rem 2rem;
display: flex;
width: auto;
border: solid;
border-radius: 10px 100px / 120px;
border-color: rgb(89, 250, 156);
border-collapse: collapse;
/* border-right-color: transparent;
border-left-color: transparent; */
/* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
/* border-top: 2px solid rgb(89, 250, 156);
border-bottom: 2px solid rgb(89, 250, 156); */
background-color: rgb(1, 12, 12, 1.0);
-webkit-box-shadow: 4px 0px 17px 1px rgba(184,82,4,0.66);
-moz-box-shadow: 4px 0px 17px 1px rgba(184,82,4,0.66);
box-shadow: rgba(10, 100, 93, 0.65) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

Table {
  color: lightgray;
  font-size: 16px;
}
@media (max-width: 768px) {
  /* display: none; hides the component once it hits this viewport size */
  display: none;
  background-color: blue;
  border-radius: 20px;
  width: 100%;
  margin: 1rem 0rem;
}
`