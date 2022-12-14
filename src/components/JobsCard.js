import React from 'react';
import {Col,Row,Container,Card} from 'react-bootstrap';
import  '../styles/ColorPages.css' ;

const jobs = require('../data/jobsHistorial.json');

export default function JobsCard(){

    return(
        <Container >
            <Row className="justify-content-mt-4"  >
              {
              jobs.map((item,index)=>(
              <Col xs="auto" md ={6} lg={6}key= {index} className="mb-4">
               <Card border="dark" style={{borderRadius: '15px',height:'18rem'}}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted " >{item.place}</Card.Subtitle>
                            <Card.Text>{item.startDate} -{item.finishDate}</Card.Text>
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