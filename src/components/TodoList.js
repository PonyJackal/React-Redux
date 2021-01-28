import React from 'react'
import PropTypes from 'prop-types'

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

TodoList.propTypes = {
  data: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onToggle: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
}

export default React.memo(TodoList)
