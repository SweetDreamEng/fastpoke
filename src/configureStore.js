import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./reducers/rootReducer";
import { loginFromCookies } from "./actions/userActions";

export const history = createBrowserHistory();

const configureStore = () => {
  const middlewareEnhancer = applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware
  );
  const composedEnhancer = composeWithDevTools(middlewareEnhancer);
  const store = createStore(
    createRootReducer(history),
    undefined,
    composedEnhancer
  );

  return store;
};

const store = configureStore();

store.dispatch(loginFromCookies());

export default store;
