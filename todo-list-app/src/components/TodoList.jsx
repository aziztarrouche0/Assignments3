import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, handleToggleTodo, handleDeleteTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;