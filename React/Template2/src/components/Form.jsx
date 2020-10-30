import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children, action = '', method = '', formClass = 'form-box' }) => {

  return (
    <div className={formClass}>
      <form action={action} method={method}>
        {children}
      </form>
    </div>
  );
};

Form.propTypes = {
  action: PropTypes.string,
  method: PropTypes.string,
  formClass: PropTypes.string,
};

export default Form;
