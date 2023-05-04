export interface IUser {
  email: string,
  password: string,
  name?: string
}

export interface IState {
  user: IUserLogado
}

export interface IUserLogado {
  name: string,
  role: string,
  email: string,
  token: string,
}