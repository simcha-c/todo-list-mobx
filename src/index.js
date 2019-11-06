import React from "react";
import ReactDOM from "react-dom";
import Todos from "./todo";
import TodoForm from "./create_todo_form";
import store from "./store";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TodoForm />
      <Todos notes={store.todos} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
