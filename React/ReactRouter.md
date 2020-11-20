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
  - actions:
    - index.js
  - reducers:
    - index.js
    
    
    // src/reducers/index.js
    // ------------------------------------------------------------
    const reducer = (state, action) => {
      return state;
    };
    
    export default reducer;


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
      'user': '',
    };
    
    const store = createStore(reducer, initialState);
    
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app'),
    );
   

    // src/containers/Home.jsx
    // ------------------------------------------------------------
    // React
    import React from 'react';
    import { connect } from 'react-redux';
    
    const Home = ({ user }) => {
      return (
        <>
          <section className='container'>
            <h1>Hello, World!</h1>
            <h3>{user}</h3>
          </section>
        </>
      );
    };
    
    const mapStateToProps = (state) => {
      return {
        user: state.user,
      };
    };
    
    // export default connect(props, actions)(Home);
    // 'actions' allows execute some reducer.
    export default connect(mapStateToProps, null)(Home);

## Reducers


