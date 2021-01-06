import React, { useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import useDebounce from "../libs/useDebounce";
import useToggle from "../libs/useToggle";
import { addTodo, toggleTodo } from "../store/actions/TodoActions";

const MainLayout = ({ todos, addTodo, toggleTodo }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [findCompleted, toggle] = useToggle(false);
  const debouncedSearch = useDebounce(searchTerm, 500);

  const index = useRef(10);
  const newTodo = useRef("");

  const onAdd = () => {
    if (newTodo.current.value) {
      addTodo(newTodo.current.value);
      index.current++;
    }

    newTodo.current.value = "";
    newTodo.current.focus();
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onToggle = useCallback(
    (id) => {
      toggleTodo(id);
    },
    [todos]
  );

  return (
    <div className="TodoApp">
      <h1>Todo List</h1>
      <div className="add-new-todo">
        <label>
          Add new Todo: <input type="text" ref={newTodo} />
        </label>
        <button onClick={onAdd}>Add</button>
      </div>
      <div className="find-todo">
        <label>
          Find Todo: <input value={searchTerm} onChange={handleChange} />
        </label>
        <label>
          Completed:{" "}
          <input
            type="checkbox"
            onChange={() => toggle()}
            checked={findCompleted}
          />
        </label>
        {isLoading && <span className="loading">searching ....</span>}
      </div>
      <TodoList
        data={todos}
        completed={findCompleted}
        searchTerm={debouncedSearch}
        onToggle={onToggle}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({ todos: state.TodoReducer.todos });

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
