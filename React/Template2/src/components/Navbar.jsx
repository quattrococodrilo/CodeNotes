// React
// ------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
// ------------------------------------------------------------
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => (
  <Navbar expand='lg'>
    <Container>
      <Navbar.Brand>
        <Link to='/'>
          Título
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <li className='nav-item'>
            <Link to='/login'>Login </Link>
          </li>
          <li className='nav-item'>
            <Link to='/register'>Register</Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
