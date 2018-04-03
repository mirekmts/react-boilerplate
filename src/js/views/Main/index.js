import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { List } from "immutable";

import Container from "components/Container";
import TodoContainer from "components/TodoContainer";
import Todo from "components/Todo";

import { fetchTodos, editTodo } from "actions/todos/index";

const mapStateToProps = state => ({
  todos: state.todos.get("todos"),
  isLoading: state.todos.get("isLoading"),
});

class Main extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    todos: PropTypes.instanceOf(List).isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  constructor() {
    super();

    this.state = {
      lastId: 0,
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  onTodoChange = (id, text, done) => {
    this.props.dispatch(editTodo(id, text, done));
  }

  createTodo = () => {
    const newTodos = [
      ...this.state.todos,
      {
        id: this.state.lastId + 1,
        text: "",
        done: false,
      },
    ];

    this.setState({
      lastId: this.state.lastId + 1,
      todos: newTodos,
    });
  }

  render() {
    const todos = this.props.todos.toJS()
      .map(todo => (
        <Todo
          key={`todo-${todo.id}`}
          todo={todo}
          onTodoChange={this.onTodoChange}
          editTodo={this.editTodo}
        />
      ));

    const todosContent = (
      <ul>
        { todos }
      </ul>
    );

    const content = this.props.isLoading ? (<p className="p-8 text-center">Loading...</p>) : todosContent;

    return (
      <Container el="main">
        <TodoContainer>
          {content}
        </TodoContainer>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Main);