import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Routes from "./routes/Routes";
import store, { history } from "./configureStore";

import "./App.scss";

function App() {

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Fragment>
          <Routes />
        </Fragment>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
