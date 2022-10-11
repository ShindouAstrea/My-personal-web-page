import React from 'react';
import {Col,Row,Container,Button,Card} from 'react-bootstrap';
import '../styles/Buttons.css';
const devApps = require('../data/devApps.json');

export default function DevAppsCard(){
    return(
        <Container>
            <Row>
            {
            devApps.map((item,index)=>(
              <Col xs="auto" md ={6} lg={6}key= {index} className="mb-4 ">
               <Card border="dark"style={{borderRadius: '15px'}}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Row>
                            <Col>
                                <Button disabled variant="outline-success play-store">Ir a  Google play</Button>
                            </Col>
                            <Col>
                                <Button  disabled variant="outline-primary">Ir a la App Store</Button>
                            </Col>
                            </Row>
                        </Card.Body>
                </Card>
              </Col>
            ))
          }
            </Row>
        </Container>
    )

}