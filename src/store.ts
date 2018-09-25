import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import app, { AppState } from "./reducers/app.js";
import counter, { CounterState } from "./reducers/counter.js";
import shop, { ShopState } from "./reducers/shop.js";
import { AppAction } from "./actions/app.js";
import { CounterAction } from "./actions/counter.js";
import { ShopAction } from "./actions/shop.js";

// Overall state extends static states and partials lazy states.
export interface RootState {
  app?: AppState;
  counter?: CounterState;
  shop?: ShopState;
}

export type RootAction = AppAction | CounterAction | ShopAction;

const rootReducer = combineReducers({
  app,
  counter,
  shop
});
export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>)
);
