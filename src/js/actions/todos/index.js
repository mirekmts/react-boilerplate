export const fetchTodos = () => ({ type: "TODOS/FETCH" });
export const editTodo = (id, text, done) => ({ type: "TODOS/EDIT", payload: { id, text, done } });
export const todosFetched = response => ({ type: "TODOS/FETCHED", payload: response });
export const todosFetchFail = e => ({ type: "TODOS/FETCH_FAIL", message: e.message });
export const todosStartFetch = e => ({ type: "TODOS/FETCH_STARTED" });