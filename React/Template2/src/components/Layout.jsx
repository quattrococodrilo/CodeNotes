import React from 'react';
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
