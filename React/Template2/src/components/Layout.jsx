// React
// ------------------------------------------------------------
import React from 'react';

// Components
// ------------------------------------------------------------
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="App">
    <Navbar />
     {children}
    <Footer />
  </div>
);

export default Layout;
