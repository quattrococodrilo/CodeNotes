# React Router

## Install

`npm install react-router-dom --save`

## Structure

__src__:

 - __routes__:

  - App.js

## Routes

The routes lives in directory called Routes child of src directory.
    
    // src/index.js
    // ---------------------------------

    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './routes/App';
    import './assets/styles/App.scss';
    
    ReactDOM.render(
      <App />,
      document.getElementById('app'),
    );

    // src/routes/App.js
    // ---------------------------------

    import React from 'react';
    import { browserRouter, Switch, Route } from 'react-router-dom';
    import Layout from '..components/Layout';
    import Home from '../containers/Home';
    
    // Switch allows return the first route matched with url

    const App = () => (
      <BrowserRoute>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Layout>
      </BrowserRoute>
    )

    export default App;

    // src/components/Layout.jsx
    // ---------------------------------
    import React from 'react';
    import Header from '../containers/Header';
    import Footer from '../containers/Footer';

    const Layout = ({ children }) => (
      <Header />
       {children}
      <Footer />
    );

    // src/containers/Home.jsx
    // ---------------------------------
    
    import React from 'react';
    
    const Home = () => (
      <div className='App'>
        <h1>This is home.</h1>
      </div>
    );
    
    export default Home;


## Modules

__Switch__: allows return the first route matched with url.
__React.Fragment__: avoid adds extra divs to components.
    
    // opt 1
    import React from 'react';

    const NotFound = () => (
      <React.Fragment>
        <h1>Not Found!</h1>
      </React.Fragment>
    );
    
    // opt 2
    import React from 'react';

    const NotFound = () => (
      <>
        <h1>Not Found!</h1>
      </>
    );

## Link

This module avoid refresh page when changes the view. 
It works as a "a" anchor.

    import React from 'react';
    import { Link } from 'react-router-dom';
    import logo from '../assets/static/logo.png'

    const Header = () => (
      <Link to='/'>
        <img className='header_img' src={logo} alt='Platzi video' />
      </Link>
    )

## Redux

Permite mantener el estado de la aplicación sin mutaciones.

`npm install redux react-redux --save`

File structure:

- src:
  - actions: event that describes something that happened in the application, and serve as the sole way to describe an intention to mutate the data.

    - index.js
  
  - reducers: describes how was changed the state of application and update the state.
    
    - index.js
    
    
    // src/index.js
    // ------------------------------------------------------------
    // React
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Provider } from 'react-redux';
    import { createStore } from 'redux';
    
    // Reducers
    import reducer from './reducers';
    
    // Containers
    import App from './routes/App';
    
    // Styles
    import './assets/styles/App.scss';
    
    const initialState = {
      'user': 'usuario',
    };
    
    const store = createStore(reducer, initialState);
    
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app'),
    );

    // ACTIONS: src/actions/index.js
    // ------------------------------------------------------------
    /* 
     * type: Indicates the action that will be executed.
     * payload: Information that we are sending to reducer.  
    */ 
    export const setUser = (payload) => ({
      type: 'SET_USER',
      payload,
    });
    
    export const deleteUser = (payload) => ({
      type: 'DELETE_USER',
      payload,
    });

    // REDUCER: src/reducers/index.js
    // ------------------------------------------------------------
    const reducer = (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: action.payload,
          };
        case 'DELETE_USER':
          return {
            ...state,
            user: action.payload,
          };
        default:
          return state;
      }
    };
    
    export default reducer;

    // COMPONENT: src/containers/home.jsx
    // ------------------------------------------------------------
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
    
    // Gets from state data that will be used. 
    const mapStateToProps = (state) => {
      return {
        user: state.user,
      };
    };
    
    // Indicates what actios will be used.
    const mapDispatchToProps = {
      setUser,
      deleteUser,
    };
    
    // export default connect(props, actions)(Home);
    // 'actions' allows execute some reducer.
    export default connect(mapStateToProps, mapDispatchToProps)(Home);

## Gravatar

`npm install md5 --save`

## Return

Allows return to the previous page.

`props.history.goBack()`

## Set/get params from URL

    // src/routes/App.js
    //:id is the param
    // ------------------------------------------------------------
    const App = () => (
      <BrowserRouter>
        <Layout>
          <Switch>
            ...
            <Route exact path='/videos/:id' component={Login} />
            ...
          </Switch>
        </Layout>
      </BrowserRouter>
    );

    // src/components/Player.jsx
    // ------------------------------------------------------------
    const Player = (props) => {
      const { id } = props.match.params;
      ...
    }

## Redirect

This is a component of React Router.
    
    import { Redirect } from 'react-router-dom';
    
    const Player (props) => {
      ...
      return hasPlaying ? (JSX code) : <Redirect to='/404/' />;
    };


## Classnames

This package is used for validate css classes.

`npm install classnames --save`

    // src/components/header.jsx
    // ------------------------------------------------------------
    ...
    import classNames from 'classnames';
    ...

    const Header = (props) => {
      ...
      const { user, isLogin, isRegister} = props
      ...
      headerClass = classNames('header', {
        isLogin,
        isRegister,
      })

      return (
        <header clasName={headerClass}>
        ...
      )
    }

    // src/containers/Login.jsx
    // ------------------------------------------------------------
    import Header from '../components/Header';

    const Login = () => {
      ...
      return {
        <>
          <Header isLogin />
        </>
      }
    }
    

