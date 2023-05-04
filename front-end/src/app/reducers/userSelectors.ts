import { createSelector, createFeatureSelector } from '@ngrx/store';
import IState from '../interfaces/IState';

export const selectUser = createSelector(
  createFeatureSelector('user'),
  (state: IState) => {
    return state.user?.name;
  }
)