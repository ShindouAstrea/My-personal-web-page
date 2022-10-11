import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import LanguagesCard from '../LanguagesCard';
function LanguagesPage(){
    return(
        <Container >
            <Row >
                <div style={{paddingTop:'100px'}}>
                    <h1>Lenguajes Conocidos</h1>
                    <div style={{paddingTop:'50px'}}>
                    <Col >
                        <LanguagesCard/>
                    </Col>
                    </div>
                </div>
                

            </Row>

        </Container>
    )
}
export default LanguagesPage ;