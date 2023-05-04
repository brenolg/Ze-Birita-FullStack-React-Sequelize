export interface ButtonData {
  class: string,
  content: string,
  clickByRole: {
    administrator?: string,
    seller?: string,
    customer?: string,
    user: string,
  },
  type: string,
  disabled: boolean,
}

export interface InputData {
  type: string,
  label: string,
  placeholder: string,
  value?: string,
}

export interface elementsData {
  buttonsData: ButtonData[]
  inputsData: InputData[]
}

export interface UserAccess {
  name?: string;
  email: string;
  password: string;
}