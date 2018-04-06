import { fork, all } from "redux-saga/effects";

import todos from "./todos";

export default function* () {
  yield all([
    fork(todos),
  ]);
}