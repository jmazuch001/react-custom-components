import React, {useState} from 'react'
import {Card, Body, Title, Text, ListGroupItem,
        ListGroupItemProps, ListGroup, Link} from 'react-bootstrap'
import Draggable from 'react-draggable';
import App from './App'
// import { makeStyles } from '@material-ui/core/styles';
// // import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });



function BadgeDesigner() {


    return (
<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/36b1dc7940733.560b48e127150.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>

  <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/36b1dc7940733.560b48e127150.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
  <Button onClick={App.handleClose}>Hide</Button>
</Card>

</div>

        
    )
}

export default BadgeDesigner;

// components can be contained within components
// This might be a valuable approach to two different systems: 
// 1.) Resume Mode
// 2.) Business Card Mode

// Will feature a QR Code

// This will be drag and drop form fields which will each be input 
// User can upload a profile picture