import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { IState } from "../interfaces/user.interface";
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

export function localStorageSyncReducer(userReducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['user']})(userReducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];