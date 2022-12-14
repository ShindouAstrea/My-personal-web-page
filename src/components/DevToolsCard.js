import React from 'react';
import {Col,Row,Container,Button,Card} from 'react-bootstrap';
const devTools = require('../data/herramientas.json');
export default function DevToolsCard(){
    return(
        <Container>
            <Row>
            {
            devTools.map((item,index)=>(
              <Col xs="auto" md ={6} lg={6}key= {index} className="mb-4">
               <Card border="dark"style={{borderRadius: '15px'}}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Button variant="outline-success" href={item.link}>Revisar Documentacion</Button>
                        </Card.Body>
                </Card>
              </Col>
            ))
          }
            </Row>
        </Container>
    )

}