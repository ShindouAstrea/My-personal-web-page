import React from 'react';
import {Card,Container,Row,Col,Button}  from 'react-bootstrap'
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