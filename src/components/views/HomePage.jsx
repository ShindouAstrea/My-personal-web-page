import React from 'react';
import {Container,Row,Col} from 'react-bootstrap' ;
import '../../styles/Engranaje.css' ;
import '../../styles/gorda.css'
import tuerca from '../../assets/tuerca.svg';
import gorda from '../../assets/gorda.jpg';

function HomePage(){
    
    return(
        <Container>
            <Row>
                <div style={{paddingTop:'100px'}}>

                <Col lg="0">
                    <h1> Este Sitio web sigue en construccion </h1>
                    <br></br>
                    <img
                    className='formato'
                    src={gorda}
                        alt=""> 
                    </img>
                    
                    
                </Col >
                <Col >
                    <div >
                            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi est voluptates dolor numquam laudantium quaerat veniam ea doloremque odio iste esse minus inventore dolores accusamus eum, sint aliquam, ut sed?</h2>
                        </div>
                </Col>
                </div>

                
            </Row>

        </Container>
        
    )
}
export default HomePage;
