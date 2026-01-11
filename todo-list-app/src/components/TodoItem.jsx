import React from 'react';

function TodoItem({ todo, handleToggleTodo, handleDeleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
export default TodoItem;