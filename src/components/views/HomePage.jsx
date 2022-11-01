import React from 'react';
import {Container,Row,Col} from 'react-bootstrap' ;
import dev from '../../assets/dev.png';
import '../../styles/HomePage.css';
const myData = require('../../data/aboutMe.json') ;
function HomePage(){
    
    return(
        <Container fluid >
            <div  style={{paddingTop:'100px'}}>
            <h1 style={{marginBottom:'50px'}}> Acerca de mi  </h1>
                <Row lg={2} className="justify-content-md-center box Content">
                    <Col xs="auto"  >
                        <br></br>
                        <img
                        className='profile-photo'
                        src={dev}
                            alt=""> 
                        </img>
                    </Col >
                    <Col xs="auto">
                        <p className='text'>{myData.text}</p>
                    </Col>
                </Row>
            </div>

        </Container>
        
    )
}
export default HomePage;
