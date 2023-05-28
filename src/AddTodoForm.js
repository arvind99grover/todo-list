import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');           // State for the todo title input field

  const handleTitleChange = (e) => {                // Event handler for changes in the todo title input field
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {                      // Event handler for changes in the todo title input field
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);           // Call the addTodo function passed as a prop and pass the new todo title
      setTitle('');             // Clear the input field by resetting the title state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={title}
        style={{ marginLeft: '40px',marginRight: '15px' }}      // Inline style for left and right margin
        onChange={handleTitleChange}                            // Call the handleTitleChange function on input change
      />
      <button type="submit">Add</button>                
    </form>
  );
};

export default AddTodoForm;
