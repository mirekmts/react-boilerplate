import React from "react";
import PropTypes from "prop-types";

import styles from "./todo.sass";

export default class Todo extends React.PureComponent {
  static propTypes = {
    onTodoChange: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
  }

  static getDerivedStateFromProps({ todo }) {
    const { text, done } = todo;

    return {
      value: text,
      done,
    };
  }

  constructor(props) {
    super();
    this.state = {
      value: props.todo.text,
      done: props.todo.done,
    };

    this.textInput = React.createRef();
    this.checkbox = React.createRef();
  }

  onEdit = id => () => {
    this.setState({
      value: this.textInput.current.value,
      done: this.checkbox.current.checked,
    }, () => {
      this.props.onTodoChange(id, this.state.value, this.state.done);
    });
  }

  render() {
    const { todo } = this.props;

    return (
      <li className={`${styles.todo} ${this.state.done ? styles["todo--done"] : ""}`}>
        <label>
          <input
            type="checkbox"
            checked={this.state.done}
            onChange={this.onEdit(todo.id)}
            ref={this.checkbox}
          />
          <input
            type="text"
            value={this.state.value}
            onChange={this.onEdit(todo.id)}
            ref={this.textInput}
          />
        </label>
      </li>
    );
  }
}