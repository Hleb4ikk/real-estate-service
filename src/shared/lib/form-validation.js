const errPasswordMessages = [
  'Password must contain at least 8 characters.',
  'Password must contain at least one uppercase letter.',
  'Password must contain at least one lowercase letter.',
  'Password must contain at least one digit.',
  'Password must contain at least one special character (!@#$%^&*).',
  'Password must not contain spaces.',
];
const errEmailMessages = [
  'Email cannot be empty.',
  "Email must contain '@'.",
  'Email must contain domain name (example.com).',
  'Email must not contain spaces.',
];

function validateEmail(email) {
  let errors = [];
  if (!email.trim()) errors.push(errEmailMessages[0]);
  if (!email.includes('@')) errors.push(errEmailMessages[1]);
  if (!email.match(/\.[a-zA-Z]{2,}$/)) errors.push(errEmailMessages[2]);
  if (email.includes(' ')) errors.push(errEmailMessages[3]);

  return errors.length !== 0 ? errors : null;
}

function validatePassword(email, password) {
  let errors = [];
  if (password.length < 8) {
    errors.push(errPasswordMessages[0]);
  }
  if (!/[A-Z]/.test(password)) {
    errors.push(errPasswordMessages[1]);
  }
  if (!/[a-z]/.test(password)) {
    errors.push(errPasswordMessages[2]);
  }
  if (!/[0-9]/.test(password)) {
    errors.push(errPasswordMessages[3]);
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push(errPasswordMessages[4]);
  }
  if (/\s/.test(password)) {
    errors.push(errPasswordMessages[5]);
  }
  //   if (password.includes(email)) {
  //     errors.push(errPasswordMessages[6]);
  //   }
  return errors.length !== 0 ? errors : null;
}

export { validateEmail, validatePassword };
