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
          <Nav.Link href="/Jobs">Trabajos</Nav.Link>
            <Nav.Link href="/Apps">Apps Desarrolladas</Nav.Link>
            <Nav.Link href="/DevTools">Herramientas</Nav.Link>
            <Nav.Link eventKey={2} href="/SocialNetworks">
              RR.SS
            </Nav.Link>
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