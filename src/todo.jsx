import React from "react";
import { observer } from "mobx-react";
import TodoListItem from "./todo_list_item";

@observer
class Todos extends React.Component {
  render() {
    const todosArr = Object.values(this.props.notes);
    const allTodos = todosArr.map(note => {
      return <TodoListItem note={note} key={note.id} />;
    });
    return (
      <>
        <h1>All Todos</h1>
        <ul className="all-todos-ul">{allTodos}</ul>
      </>
    );
  }
}

export default Todos;

// export default observer(Todo);
