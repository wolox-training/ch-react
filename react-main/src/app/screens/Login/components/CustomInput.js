import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomInput extends Component {
  render() {
    const { label, input, type, meta } = this.props;
    return (
      <div className="inputContainer">
        <label htmlFor="email">{label}</label>
        <input {...input} type={type} />
        {meta.error && meta.touched && <div className="alert">{meta.error}</div>}
      </div>
    );
  }
}

CustomInput.propTypes = {
  handleSubmit: PropTypes.func,
  label: PropTypes.string,
  input: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string])).isRequired,
  type: PropTypes.string,
  meta: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.bool]))
};

export default CustomInput;
