import { createAction, props } from '@ngrx/store';
import IState from '../interfaces/IState';

export const getLoginInfo = createAction('GET_LOGIN_INFO', props<IState>());