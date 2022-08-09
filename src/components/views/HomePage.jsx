import React from 'react';
import {Container,Row} from 'react-bootstrap' ;
import '../../styles/Engranaje.css' ;
import tuerca from '../../assets/tuerca.svg'

function HomePage(){
    
    return(
        <Container>
            <Row>
                <h1> Este Sitio web sigue en construccion </h1>
                <br></br>
                <img
                className="engranaje"
                src={tuerca}
                alt="tuerca"
                />
            </Row>

        </Container>
        
    )
}
export default HomePage;
