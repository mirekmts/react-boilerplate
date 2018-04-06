import { Map, List } from "immutable";

const initialState = Map({
  isLoading: false,
  lastId: 0,
  todos: List(),
});

const createEmptyTodo = id => List([Map({
  id,
  done: "",
  text: "",
})]);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TODOS/FETCH_STARTED": {
      return state
        .set("isLoading", true)
    }

    case "TODOS/FETCHED": {
      const todosResponse = action.payload.splice(0, 5);

      const todosMap = todosResponse.map(todo => (
        Map({
          id: todo.id,
          done: todo.completed,
          text: todo.title,
        })
      ));

      const lastId = todosResponse[todosResponse.length - 1].id;

      const emptyTodo = createEmptyTodo(lastId + 1);

      return state
        .set("isLoading", false)
        .set("lastId", lastId + 1)
        .update("todos", val => val.concat(todosMap).concat(emptyTodo));
    }

    case "TODOS/EDIT": {
      const todoIndex = state.get("todos").findKey(todo => todo.get("id") === action.payload.id);

      const todos = state
        .setIn(["todos", todoIndex, "text"], action.payload.text)
        .setIn(["todos", todoIndex, "done"], action.payload.done)
        .update("todos", val => val.filter(todo => todo.get("text") !== "" || todo.get("id") === val.last().get("id")));

      if (todos.get("todos").last().get("text") !== "") {
        const emptyTodo = createEmptyTodo(state.get("lastId") + 1);

        return todos
          .update("lastId", val => val + 1)
          .update("todos", val => val.concat(emptyTodo));
      }

      return todos;
    }

    // no default
  }

  return state;
}