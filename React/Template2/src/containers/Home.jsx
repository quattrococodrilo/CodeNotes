// React
import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { setUser, deleteUser } from '../actions';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Home = (props) => {
  const [{userName}, setData] = useState({
    userName: props.userName,
  })
  
  const handleSubmitData = (e) => {
    e.preventDefault();
    props.setUser(e.target.userName.value);
    setData({ userName: e.target.userName.value });
  };
  const handleDeleteUser = () => {
    props.deleteUser('');
    setData({ userName: '' });
  };
  return (
    <>
      <section className='container'>
        <h1>Hello, World!</h1>
        <h3>{userName}</h3>
        <Form onSubmit={handleSubmitData}>
          <Form.Group controlId='userName'>
            <Form.Label>Enter name</Form.Label>
            <Form.Control type='text' name='userName' />
          </Form.Group>
          <Button type='submit'>
            Change name
          </Button>
          <Button 
            type='button' 
            className='ml-2' 
            onClick={handleDeleteUser}>
            Delete User
          </Button>
        </Form>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};

const mapDispatchToProps = {
  setUser,
  deleteUser,
};

// export default connect(props, actions)(Home);
// 'actions' allows execute some reducer.
export default connect(mapStateToProps, mapDispatchToProps)(Home);

