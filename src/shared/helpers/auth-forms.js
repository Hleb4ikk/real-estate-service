const loginForm = {
  title: {
    ru: 'Вход',
    en: 'Log in',
  },

  fields: {
    email: {
      placeholder: {
        ru: 'Электронная почта',
        en: 'Email',
      },
      type: 'email',
      required: true,
    },
    password: {
      placeholder: {
        ru: 'Пароль',
        en: 'Password',
      },
      type: 'password',
      required: true,
    },
  },

  submitButton: {
    text: {
      ru: 'Войти',
      en: 'Log in',
    },
  },

  toRegisterRedirection: {
    text: {
      ru: 'Нету аккаунта? Нажмите',
      en: "Don't have an account? Click",
    },
  },

  goBackButton: {
    text: {
      ru: 'Вернуться назад',
      en: 'Go back',
    },
  },
};

const registrationForm = {
  title: {
    ru: 'Регистрация',
    en: 'Registration',
  },

  fields: {
    email: {
      placeholder: {
        ru: 'Электронная почта',
        en: 'Email',
      },
      type: 'email',
      required: true,
    },
    password: {
      placeholder: {
        ru: 'Пароль',
        en: 'Password',
      },
      type: 'password',
      required: true,
    },
    role: {
      placeholder: {
        ru: 'Кем вы являетесь?',
        en: 'Who are you?',
      },
      type: 'radio',
      required: true,
      options: [
        {
          value: 'Риелтор',
          label: {
            ru: 'Риелтор',
            en: 'Realtor',
          },
        },
        {
          value: 'Клиент',
          label: {
            ru: 'Клиент',
            en: 'Client',
          },
        },
      ],
    },
    confirmPassword: {
      placeholder: {
        ru: 'Подтвердите пароль',
        en: 'Confirm password',
      },
      type: 'password',
      required: true,
    },
  },
};

export { loginForm, registrationForm };
