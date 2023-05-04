import { createReducer, on } from '@ngrx/store';
import IState from "../interfaces/IState";
import { getLoginInfo } from './userActions';

export const initialUserInfo: IState = {};

export const userReducer = createReducer(
  initialUserInfo,
  on(getLoginInfo, (_, user) => {
    return user;
  })
)