import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header() {
return (
<div> 
<Navbar expand="lg" className="bg-dark" variant='dark' text="light">
      <Container style={{fontStyle:"Time New Roman"}}>
        <Navbar.Brand > <Link to={'/'} style={{textDecoration:'none', color:'white'}} > Aftab Portfolio</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto "style={{paddingLeft:"40rem",fontSize:"15px" }}>

            <Nav.Link  className='ps-2'> <Link to={'/'} style={{textDecoration:'none', color:'white'}} > Home</Link> </Nav.Link>
            <Nav.Link  className='ps-2'> <Link to={'/allprojects'} style={{textDecoration:'none', color:'white'}}>Projects</Link></Nav.Link>
            
            <Link to={'/reviews'} style={{textDecoration:'none', color:'white'}}>
            <NavDropdown  className='ps-2' title="Reviews" id="basic-nav-dropdown">
              
              <NavDropdown.Item  href="#action/3.1">
                Seller Reviews
              
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                 Buyer Review         
              </NavDropdown.Item>                     
            </NavDropdown>
              </Link>   
            <Nav.Link className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/products"}> Products </Link></Nav.Link>
            <Nav.Link className='ps-2'><Link to={'/contact'} style={{textDecoration:'none', color:'white'}} >Contact Us </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
</div>
)
}

export default Header