import React, { useEffect } from 'react'

const TodoList = ({ data, searchTerm, onToggle, completed }) => (
  <ul className="todo-container">
    {data
      .filter(
        (todo) =>
          (!searchTerm ||
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (!completed || todo.completed === completed),
      )
      .map((todo) => (
        <li key={todo.id}>
          <label className={todo.completed ? 'completed-todo' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            {todo.title}
          </label>
        </li>
      ))}
  </ul>
)

export default React.memo(TodoList)
