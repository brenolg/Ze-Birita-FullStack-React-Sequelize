export default interface IState {
  user: IUserLogado
}

export interface IUserLogado {
  name: string,
  role: string,
  email: string,
  token: string,
}