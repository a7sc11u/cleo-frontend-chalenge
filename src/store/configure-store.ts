import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { Api } from "../services/api";
import { billsReducer } from "../modules/bills";

// combine reducers
export const rootReducer = combineReducers({ bills: billsReducer });

/**
 * Configure Store
 */
export const configureStore = () => {
  // configure middleware
  const middleware = [
    thunk.withExtraArgument({
      api: new Api(),
    }),
  ];

  if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
  }

  // create store
  const store = createStore(rootReducer, applyMiddleware(...middleware));

  return store;
};
