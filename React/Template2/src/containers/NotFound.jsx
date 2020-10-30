import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const NotFound = () => (
  <>
    <Container>
      <Jumbotron>
        <h1>Not Found!</h1>
        <h2>
          Return to <Link to='/'>Home</Link>
        </h2>
      </Jumbotron>
    </Container>
  </>
);

export default NotFound;
