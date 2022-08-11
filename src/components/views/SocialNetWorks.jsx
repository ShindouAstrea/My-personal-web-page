import React from 'react';
import { Container ,Col,Row} from 'react-bootstrap';
import SocialNetWorksCard from '../SocialNetworksCard' ;
function SocialNetWorks(){
    return(
        <Container>
            <Row>
                <div style={{paddingTop: '100px'}}>
                    <h1>Redes Sociales</h1>
                    <div style={{paddingTop:'50px'}}>
                    <Col>
                        <SocialNetWorksCard/>
                    </Col>
                    </div>
                </div>
            </Row>

        </Container>
       
    )
}
export default SocialNetWorks