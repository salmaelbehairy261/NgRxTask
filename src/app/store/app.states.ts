import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as auth from './reducers/auth.reducers';


export interface AppState {
  authState: auth.State;
}

export const reducers:any = {
  auth: auth.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth')
