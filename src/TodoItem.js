import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  // State for editing mode and todo title
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  // Event handler for checkbox changes
  const handleCheckboxChange = () => {
    const updatedTodo = { completed: !todo.completed };     // Create an updatedTodo object with the opposite value of completed
    updateTodo(todo.id, updatedTodo);       // Call the updateTodo function passed as a prop and pass the todo id and updatedTodo
  };

  const handleTitleChange = (e) => {            // Call the updateTodo function passed as a prop and pass the todo id and updatedTodo
    setTitle(e.target.value);
  };

  const handleEditClick = () => {           // Event handler for edit button click
    setEditing(true);
  };

  // Event handler for save button click
  const handleSaveClick = () => {
    const updatedTodo = { title };      // Event handler for save button click
    updateTodo(todo.id, updatedTodo);   // Call the updateTodo function passed as a prop and pass the todo id and updatedTodo
    setEditing(false);          // Exit editing mode
  };

  // Event handler for cancel button click
  const handleCancelClick = () => {
    setTitle(todo.title);       // Call the deleteTodo function passed as a prop and pass the todo id
    setEditing(false);          // Exit editing mode
  };

  // Event handler for delete button click
  const handleDeleteClick = () => {
    deleteTodo(todo.id);        // Call the deleteTodo function passed as a prop and pass the todo id
  };

  return (
    <li className={`todo-item ${editing ? 'editing' : ''}`}> 
    {/* Checkbox for marking todo as completed */}
      <input                            
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      {editing ? (
        <input                          // Input field for editing todo title
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="edit-input"
        />
      ) : (
        // Display todo title as span element
        <span className={`todo-title ${todo.completed ? 'completed' : ''}`}>    
          {todo.title}
        </span>
      )}
      <div className="actions">
        {editing ? (
            // Buttons for saving and canceling edits
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
            // Button for entering editing mode
          <button onClick={handleEditClick}>Edit</button>
        )}
        {/* Button for deleting the todo */}
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
