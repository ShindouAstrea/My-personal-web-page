import React from 'react';
import {Container,Row,Col}  from 'react-bootstrap'
import DevAppsCard from '../DevAppsCard' ;
function DevApps(){
    return(
        <Container className='contenedor'>
            <Row>
                <Col>
                    <DevAppsCard/>
                </Col>

            </Row>

        </Container>
        
    )
}
export default DevApps ;