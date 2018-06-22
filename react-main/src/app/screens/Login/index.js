import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Field required.');
const email = value => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(value));
  return re.test(value);
};
const minLenght8 = value => (value.length >= 8 ? undefined : 'Field must be at least 8 characters long.');

class Login extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" validate={[required, email]} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="password" validate={[required, minLenght8]} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default (Login = reduxForm({
  form: 'login'
})(Login));
