import React from 'react';
import {Outlet} from 'react-router-dom';
import {Nav,Navbar,Container} from 'react-bootstrap';
import '../styles/NavBar.css' ;
function NavBarComponent(){
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          </Nav>
          <Nav>
            <Nav.Item className='mr-5'>
                <Nav.Link href ="Jobs">
                Mis trabajos
                </Nav.Link>
            </Nav.Item>
          <Nav.Item className='mr-5'>
                <Nav.Link href ="Apps">
                Apps
                </Nav.Link>
                
            </Nav.Item>
            <Nav.Item className='mr-5'>
                <Nav.Link href ="DevTools">
                Tools
                </Nav.Link>
                
            </Nav.Item>
            <Nav.Item className='mr-5'>
                <Nav.Link href ="SocialNetworks">
                Redes
                </Nav.Link>
                
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Outlet/>

        </>
       
            // <>
            //     <Row className="navBar">
            //     <Col className='navBarButtons'>
            //             <Link   to="/">
            //                 <span >Inicio</span>
            //             </Link> 
            //     </Col>
            //     <Col className='navBarButtons'>
            //     <Link to="/Apps">
            //                 <span >App desarrolladas</span>
            //             </Link>
            //     </Col>
            //     <Col className='navBarButtons'>
            //     <Link to="/Jobs">
            //                 <span >Historial de empleos</span>
            //             </Link>
            //     </Col>
                
            //     <Col className='navBarButtons'>
            //     <Link to="/DevTools">
            //                 <span  >Herramientas trabajadas</span>
            //             </Link>
            //     </Col>
            //     <Col className='navBarButtons'>
            //     <Link to="/SocialNetworks">
            //                 <span >Social Networks</span>
            //             </Link>
            //     </Col>
            // </Row>
            // <Outlet/>
    )
}
export default NavBarComponent ;