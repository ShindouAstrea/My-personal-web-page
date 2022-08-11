import React from 'react';
import DevToolsCard from '../DevToolsCard';
import {Col,Row,Container} from 'react-bootstrap';

function DevTools(){
    return(
        <Container >
            <Row >
                <div style={{paddingTop:'100px'}}>
                    <h1>Frameworks Trabajados</h1>
                    <div style={{paddingTop:'50px'}}>
                    <Col >
                        <DevToolsCard/>
                    </Col>
                    </div>
                </div>
                

            </Row>

        </Container>
    )
}
export default DevTools ;