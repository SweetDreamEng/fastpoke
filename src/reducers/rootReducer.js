import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import userReducer from "./userReducer";
import profileEmployerReducer from "./profileEmployerReducer";
import searchReducer from './searchReducer';
import { LOGOUT } from "../actions/types";

const createRootReducer = (history) => (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  const rootReducer = combineReducers({
    router: connectRouter(history),
    user: userReducer,
    profileEmployer: profileEmployerReducer,
    searchRecruiter: searchReducer, 
  });

  return rootReducer(state, action);
};

export default createRootReducer;
