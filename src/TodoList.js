import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        // Render a TodoItem component for each todo in the todos array
        <TodoItem
          key={todo.id}                             // Set a unique key for each TodoItem
          todo={todo}                               // Pass the todo object as a prop
          updateTodo={updateTodo}                   // Pass the updateTodo function as a prop
          deleteTodo={deleteTodo}                   // Pass the deleteTodo function as a prop
        />
      ))}
    </ul>
  );
};

export default TodoList;
