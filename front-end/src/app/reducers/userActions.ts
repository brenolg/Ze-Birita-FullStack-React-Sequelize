import { createAction, props } from '@ngrx/store';
import { IState } from '../interfaces/user.interface';

export const getLoginInfo = createAction('GET_LOGIN_INFO', props<IState>());