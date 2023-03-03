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
border-color: coral;
border-collapse: collapse;
/* background-color: blue; */
border-radius: 10px 100px / 120px;

h1 {
  text-align: center;
  text-shadow: -1px 1px 1px rgb(38, 57, 77);
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
border-color: #3A8135;
border-collapse: collapse;
/* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
border-right: 4mm groove #3A8135;
-webkit-box-shadow: 4px 0px 17px 1px rgba(184,82,4,0.66);
-moz-box-shadow: 4px 0px 17px 1px rgba(184,82,4,0.66);
box-shadow: 4px 0px 17px 1px rgba(38, 57, 77, 0.66);


@media (max-width: 768px) {
  /* display: none; hides the component once it hits this viewport size */
  display: none;
  background-color: blue;
  border-radius: 20px;
  width: 100%;
  margin: 1rem 0rem;
}
`