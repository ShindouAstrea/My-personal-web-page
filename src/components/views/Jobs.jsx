import React from 'react';
import JobsCard from '../JobsCard';
import {Col,Container,Row} from 'react-bootstrap'
function Jobs(){
    return(
        <Container>
            <Row>
                <div style={{paddingTop:'100px'}}>
                    <h1>Experiencia Laboral</h1>
                    <div style={{paddingTop:'50px'}}>
                    <Col>
                        <JobsCard/>
                    </Col>
                    </div>

                    
                </div>
            </Row>
        </Container>
        
    )
}
export default Jobs