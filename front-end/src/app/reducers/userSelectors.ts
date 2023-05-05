import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from '../interfaces/user.interface';

export const selectUser = createSelector(
  createFeatureSelector('user'),
  (state: IState) => {
    return state.user?.name;
  }
)