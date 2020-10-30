import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, container }) => (
  <section className={container ? 'container' : ''}>
    {children}
  </section>
);

Section.propTypes = {
  container: PropTypes.bool,
};

export default Section;
