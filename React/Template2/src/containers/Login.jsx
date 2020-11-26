// React
// ------------------------------------------------------------
import React, { useState } from 'react';

// Redux
// ------------------------------------------------------------
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

// Bootstrap
// ------------------------------------------------------------
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
// ------------------------------------------------------------
import Section from '../components/Section';
// import Form from '../components/Form';

const Login = props => {
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/')
  };

  return (
    <>
      <Section>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1>Login</h1>
              <Form className='login__form' onSubmit={handleSubmit}>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    placeholder='Enter email'
                    onChange={handleInput}
                  />
                  <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicCheckbox'>
                  <Form.Check type='checkbox' label='Check me out' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

const mapDispatchToPops = {
  loginRequest,
};

// export default Login;
export default connect(null, mapDispatchToPops)(Login);
