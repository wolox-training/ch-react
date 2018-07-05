export const required = value => (value ? undefined : 'Field required');
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
export const minLength8 = (value = '') =>
  value.length >= 8 ? undefined : 'Value must be at least 8 characters';
