const buttonsData = [
  {
    class: 'button_primary',
    content: 'CADASTRAR',
    clickByRole: {
      customer: 'products',
      user: '',
    },
    type: 'submit',
    disabled: false,
  },
]

const inputsData = [
  {
    type: "text",
    label: "Nome",
    placeholder: "Nome completo",
  },
  {
    type: "email",
    label: "Email",
    placeholder: "user@email.com",
  },
  {
    type: "password",
    label: "Senha",
    placeholder: "*******",
  }
]

export const registerData = {
  buttonsData,
  inputsData,
}