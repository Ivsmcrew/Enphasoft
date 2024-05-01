export function validateUsername(value) {
  let errorMessage;
  if (!value) {
    errorMessage = 'Username is required';
  } else if (value.length > 150) {
    errorMessage = 'Too much symbols'
  } else if (
    !/^[\w.@+-]+$/i.test(value)
  ) {
    errorMessage = 'Invalid username address';
  }
  return errorMessage;
}
export function validatePassword(value) {
  let errorMessage;
  if (!value) {
    errorMessage = 'Password is required';
  } else if (value.length > 128) {
    errorMessage = 'Too much symbols'
  } else if (
    !/^(?=.*[A-Z])(?=.*\d).{8,}$/i.test(value)
  ) {
    errorMessage = 'Invalid password';
  }
  return errorMessage;
}
export function validateName(value) {
  let errorMessage;
  if (!value) {
    errorMessage = 'First and last names are required';
  } else if (value.length > 150) {
    errorMessage = 'Too much symbols'
  } else if (
    !/^[\w.@+-]+$/i.test(value)
  ) {
    errorMessage = 'Invalid username address';
  }
  return errorMessage;
}