import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "sagas/";
import reducers from "reducers/";

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composeCreateStore = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : fn => fn,
);
/* eslint-enable */

const store = createStore(
  reducers,
  composeCreateStore,
);

sagaMiddleware.run(sagas);

export default store;