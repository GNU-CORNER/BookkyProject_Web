import React from "react";
import Todos from "../components/redux-tests/reduxTest2";
import { connect, useStore } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  const store = useStore();
  console.log(store.getState());
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

const mapStateToProps = ({ todos }) => ({
  input: todos.input,
  todos: todos.todos,
});

const mapDispatchToProps = {
  changeInput,
  insert,
  toggle,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
