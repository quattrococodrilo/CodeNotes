// React
import React from 'react';
import { connect } from 'react-redux';
import { setUser, deleteUser } from '../actions';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Home = (props) => {
  const { user } = props;
  const handleSubmitData = (e) => {
    e.preventDefault();
    props.setUser(e.target.userName.value);
  };
  const handleDeleteUser = () => {
    props.deleteUser('');
  };
  return (
    <>
      <section className='container'>
        <h1>Hello, World!</h1>
        <h3>{user}</h3>
        <Form onSubmit={handleSubmitData}>
          <Form.Group controlId='userName'>
            <Form.Label>Enter name</Form.Label>
            <Form.Control type='text' name='userName' />
          </Form.Group>
          <Button type='submit'>
            Change name
          </Button>
          <Button type='button' className='ml-2' onClick={handleDeleteUser}>
            Delete User
          </Button>
        </Form>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setUser,
  deleteUser,
};

// export default connect(props, actions)(Home);
// 'actions' allows execute some reducer.
export default connect(mapStateToProps, mapDispatchToProps)(Home);

