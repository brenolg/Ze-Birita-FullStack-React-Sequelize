import { createReducer, on } from '@ngrx/store';
import IState from "../interfaces/IState";
import { getLoginInfo } from './userActions';

export const initialUserInfo: IState = {
  user: {
    name: '',
    email: '',
    token: '',
    role: '',
  }
};

export const userReducer = createReducer(
  initialUserInfo,
  on(getLoginInfo, (prevState, newState) => {
    return newState;
  })
)