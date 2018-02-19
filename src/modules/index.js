import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import io from "socket.io-client";
import feathers from "feathers/client";
import hooks from "feathers-hooks";
import authentication from "feathers-authentication-client";
import socketio from "feathers-socketio/client";
import rest from "feathers-rest/client";
import superagent from "superagent";
import { reducer as formReducer } from "redux-form";

/* Adding our Reducers */
export const rootReducer = combineReducers({
  form: formReducer
});

/* Adding our created Sagas */
export function* rootSaga() {
  yield [];
}

const host = "http://localhost:3030";

const socket = io(host);
const app = feathers().configure(socketio(socket)).configure(hooks());

const restApp = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(hooks())
  .configure(authentication({ storage: window.localStorage }));
