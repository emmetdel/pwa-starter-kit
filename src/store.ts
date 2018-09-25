import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import app, { AppState } from "./reducers/app";

import { AppAction } from "./actions/app";

// Overall state extends static states and partials lazy states.
export interface RootState {
  app?: AppState;
}

export type RootAction = AppAction;

const rootReducer = combineReducers({
  app
});
export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>)
);
