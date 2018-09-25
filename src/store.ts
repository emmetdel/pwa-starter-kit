import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import app, { AppState } from "./reducers/app";

import { AppAction } from "./actions/app";

export interface RootState {
  app?: AppState;
}

export type RootAction = AppAction;

const rootReducer = combineReducers({
  app
});

export const store = createStore(
  rootReducer,
  {} as RootState,
  applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>)
);
