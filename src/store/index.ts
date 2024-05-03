import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import createSagaMiddleWare from 'redux-saga';
import postReducer from "./postReducer";
import { postWatcher } from "../saga/postsSaga";

const sagaMiddleWare = createSagaMiddleWare();

// const composeEnchancers = (window as any).__REDUX_DEVTOOLS_COMPOSE__

const rootReducer = combineReducers({ // Работает с js, но не с ts
    post: postReducer,
    user: postReducer
})

export const store = createStore(postReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(postWatcher);
