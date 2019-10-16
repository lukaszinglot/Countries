import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// const composedEnhancers = composeWithDevTools();
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
