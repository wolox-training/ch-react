import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomInput extends Component {
  render() {
    const { label, input, type, meta } = this.props;
    return (
      <div className="flex-center-column">
        <label htmlFor="email">{label}</label>
        <input {...input} type={type} />
        {meta.error && meta.touched && <div className="alert">{meta.error}</div>}
      </div>
    );
  }
}

CustomInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  label: PropTypes.string,
  input: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string])).isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.bool])).isRequired
};

export default CustomInput;
