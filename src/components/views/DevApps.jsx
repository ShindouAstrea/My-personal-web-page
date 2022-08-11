import React from 'react';
import {Container,Row,Col}  from 'react-bootstrap'
import DevAppsCard from '../DevAppsCard' ;
function DevApps(){
    return(
        <Container className='contenedor'>
            <Row >
                <div style={{paddingTop:'100px'}}>
                    <h1>Apps Creadas</h1>
                    <div style={{paddingTop:'50px'}}>
                        <Col >
                            <DevAppsCard/>
                        </Col>
                    </div>
                </div>
            </Row>

        </Container>
        
    )
}
export default DevApps ;