import React from 'react';
import {Col,Row,Container,Button,Card} from 'react-bootstrap';
const Social = require('../data/social.json');
export default function SocialNetWorks(){
    return(
        <Container>
            <Row>
            <h1>Redes Sociales</h1>
            {
            Social.map((item,index)=>(
              <Col xs="auto" md ={6} lg={6}key= {index} className="mb-4">
               <Card border="dark">
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Button variant="outline-success" href={item.url}>Ir</Button>
                        </Card.Body>
                </Card>
              </Col>
            ))
          }
            </Row>
        </Container>
    )

}