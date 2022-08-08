import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import '../styles/NavBar.css' ;
function NavBarComponent(){
    return (
            <>
                <Row className="navBar">
                <Col className='navBarButtons'>
                        <Link   to="/">
                            <span >Inicio</span>
                        </Link> 
                </Col>
                <Col className='navBarButtons'>
                <Link to="/Apps">
                            <span >App desarrolladas</span>
                        </Link>
                </Col>
                <Col className='navBarButtons'>
                <Link to="/Jobs">
                            <span >Historial de empleos</span>
                        </Link>
                </Col>
                
                <Col className='navBarButtons'>
                <Link to="/DevTools">
                            <span  >Herramientas trabajadas</span>
                        </Link>
                </Col>
                <Col className='navBarButtons'>
                <Link to="/SocialNetworks">
                            <span >Social Networks</span>
                        </Link>
                </Col>
            </Row>
            <Outlet/>
        </>
    )
}
export default NavBarComponent ;