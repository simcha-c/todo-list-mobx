import { autorun, observable } from "mobx";

class TodoStore {
  @observable todos = {
    1: { id: 1, title: "must!", description: "get milk", finished: true }
  };
  @observable id = 2;
}

const store = new TodoStore();

window.store = store;
export default store;

autorun(() => {
  // const todos = Object.values(store.todos);
  // const last = todos.length - 1;
  // console.log(todos);
  // console.log(todos[last].id);
  // console.log(todos[last].title);
  // console.log(todos[last].description);
});
