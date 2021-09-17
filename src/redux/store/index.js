import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { initialState } from "../reducers";
import libraryReducer from "../reducers/library";
import songReducer from "../reducers/song";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const bigReducer = combineReducers({
  song: songReducer,
  library: libraryReducer
});

const configureStore = createStore(
  bigReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? composeEnhancers(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export default configureStore;
