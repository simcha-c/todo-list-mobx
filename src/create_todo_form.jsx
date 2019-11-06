import React from "react";
import store from "./store";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      title: "",
      finished: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    // updates the mobx store to include this todo
    const id = store.id;
    const todo = Object.assign({ id: id }, this.state);
    store.todos[id] = todo;
    // this.setState({
    //   description: "",
    //   title: ""
    // });
  }

  render() {
    return (
      <form className="flex-form" onSubmit={this.handleSubmit}>
        <label>
          <span> Title: </span>
          <input
            type="text"
            placeholder="Todo Title"
            value={this.state.title}
            onChange={this.update("title")}
          />
        </label>

        <label>
          <span> Description: </span>
          <input
            type="text"
            placeholder="Todo Description"
            value={this.state.description}
            onChange={this.update("description")}
          />
        </label>

        <input type="submit" value="Create Todo" />
      </form>
    );
  }
}

export default TodoForm;
