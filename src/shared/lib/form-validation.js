const errPasswordMessages = [
  'Пароль должен содержать не менее 8 символов.',
  'Пароль должен содержать хотя бы одну заглавную букву.',
  'Пароль должен содержать хотя бы одну строчную букву.',
  'Пароль должен содержать хотя бы одну цифру.',
  'Пароль должен содержать хотя бы один специальный символ (!@#$%^&*).',
  'Пароль не должен содержать пробелы.',
  //   'Пароль не должен содержать электронную почту.',
];
const errEmailMessages = [
  'Email не может быть пустым.',
  "Email должен содержать символ '@'.",
  'Email должен содержать доменное имя (например, example.com).',
  'Email не должен содержать пробелы.',
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
