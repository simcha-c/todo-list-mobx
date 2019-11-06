import React from "react";
import { observer } from "mobx-react";

@observer
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  toggleComplete(e) {
    e.preventDefault();
    console.log("clicked!");
    const { note } = this.props;
    note.finished = !note.finished;
    // todo.finished = !todo.finished;
    // const newTodo = Object.assign({}, todo);
    // store.todos[this.props.note.id] = newTodo;
  }

  render() {
    const { note } = this.props;
    console.log(note.title);
    console.log(note.finished);
    const styles = {};
    let checkbox = (
      <i onClick={this.toggleComplete} className="far fa-square" />
    );
    if (note.finished) {
      styles.textDecoration = "line-through";
      checkbox = (
        <i onClick={this.toggleComplete} className="far fa-check-square" />
      );
    }

    return (
      <li className="flex-row" style={styles}>
        {checkbox}
        <div className="flex-col">
          <span>{note.title}</span>
          <p>{note.description}</p>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
