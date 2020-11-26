// React
// ------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Bootstrap
// ------------------------------------------------------------
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Gravatar
import gravatar from '../utils/gravatar';

// Actions
import { logoutRequest } from '../actions';

const NavbarComponent = (props) => {
  const { email, userName } = props;
  const gravatarImage = () => (
    <Nav.Link>
      <img src={gravatar(email)} alt={email} width='30px' />
    </Nav.Link>
  );
  const handleLogout = () => {
    props.logoutRequest();
  };
  return (
    <Navbar expand='lg' className='navbar-right'>
      <Container>
        <Navbar.Brand>
          <span className='navbar_link'>
            <Link to='/'>
              Título
            </Link>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            { !email ?
              (
                <Nav.Link>
                  <span className='navbar_link'>
                    <Link to='/login'>Login </Link>
                  </span>
                </Nav.Link>
              ) :
              null}
            { !email ?
              (
                <Nav.Link>
                  <span className='navbar_link'>
                    <Link to='/register'>Register</Link>
                  </span>
                </Nav.Link>
              ) :
              null}
            { email ?
              (
                <Nav.Link onClick={handleLogout}>
                  Log out
                </Nav.Link>
              ) :
              null}
          </Nav>
          <Nav>
            { email ?
              gravatarImage() :
              null }
            <NavDropdown title={userName} id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.email,
    userName: state.userName,
  };
};

const mapDispatchToPops = {
  logoutRequest,
};

// export default NavbarComponent;
export default connect(mapStateToProps, mapDispatchToPops)(NavbarComponent);
