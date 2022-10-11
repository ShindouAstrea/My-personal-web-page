import React from 'react';
import {Col,Row,Container,Card} from 'react-bootstrap';

const lang = require('../data/languages.json');

export default function LanguagesCard(){

    return(
        <Container >
            <Row className="justify-content-mt-4"  >
              {
              lang.map((item,index)=>(
              <Col xs="auto" md ={6} lg={6}key= {index} className="mb-4" >
               <Card border="dark" style={{borderRadius: '15px', height:'10rem'}}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted " >Nivel: {item.level}</Card.Subtitle>
                            <Card.Text>{item.description}</Card.Text> 
                        </Card.Body>
                </Card>
              </Col>
            ))
          }
            
            </Row>
        </Container>
    )

}