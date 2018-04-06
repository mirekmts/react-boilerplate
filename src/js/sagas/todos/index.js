import { put, takeLatest, all, call } from "redux-saga/effects";
import { todosFetched, todosFetchFail, todosStartFetch } from "actions/todos/index";

const apiFetchTodos = () => fetch("http://www.somaku.com/todos/").then(res => res.json());

function* fetchTodos() {
  yield put(todosStartFetch());

  try {
    const response = yield call(apiFetchTodos);

    yield put(todosFetched(response));
  } catch (e) {
    yield put(todosFetchFail(e));
  }
}

function* todosSaga() {
  yield all([
    takeLatest("TODOS/FETCH", fetchTodos),
  ]);
}


export default todosSaga;