import React from 'react';
import {Container,Row,Col}  from 'react-bootstrap'
import DevAppsCard from '../DevAppsCard' ;
function DevApps(){
    return(
        <Container className='contenedor'>
            <Row style={{marginRight:"100",backgrounColor:"blue"}}>
                <Col>
                    <DevAppsCard/>
                </Col>
            </Row>

        </Container>
        
    )
}
export default DevApps ;