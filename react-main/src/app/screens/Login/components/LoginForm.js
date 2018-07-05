import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { email, required, minLength8 } from '../../../../validations/validations';

import CustomInput from './CustomInput';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="flex-center-column">
        <Field label="Email" name="email" component={CustomInput} type="email" validate={[required, email]} />
        <Field
          label="Password"
          name="password"
          component={CustomInput}
          type="password"
          validate={[required, minLength8]}
        />
        <button className="flex-center-column inputContainer" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

LoginForm = reduxForm({
  form: 'contact'
})(LoginForm);

export default LoginForm;
