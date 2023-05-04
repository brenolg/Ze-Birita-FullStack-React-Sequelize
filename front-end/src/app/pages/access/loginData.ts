const buttonsData = [
  {
    class: 'button_primary',
    content: 'LOGIN',
    clickByRole: {
      seller: 'orders',
      customer: 'products',
      user: '',
    },
    type: 'submit',
    disabled: true
  },
  {
    class: 'button_tertiary',
    content: 'Ainda não tenho conta',
    clickByRole: {
      user: 'register'
    },
    type: 'button',
    disabled: false,
  },

];

const inputsData = [
  {
    type: 'email',
    label: 'Login',
    placeholder: 'user@email.com',
    value: '',
  },
  {
    type: 'password',
    label: 'Senha',
    placeholder: '*******',
    value: '',
  },
];

const loginData = {
  buttonsData,
  inputsData,
};

export default loginData;
