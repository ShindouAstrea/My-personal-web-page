import React from 'react';
import {Col,Row,Container,Button} from 'react-bootstrap';
import '../styles/logos.css' ;
const Social = require('../data/social.json');

export default function SocialNetWorks(){
    return(
      
        <Container>
            <Row xs="3" md ="3" lg="4" className="box">
            {
            Social.map((item,index)=>(
              <Col  key={index} className="mb-4 ">
                <img src={require(`../assets/${item.pic}`)} className="logo" alt=""></img>
                <br></br>
                <br></br>
                <Button variant="outline-success" href={item.url}>Visitar </Button>
               
              </Col>
            ))
          }
            </Row>
        </Container>
    )

}