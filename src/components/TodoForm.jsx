import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: props.edit ? props.edit.id : Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  };

  return (
    <form action="" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">{props.edit ? 'Update' : 'Add'} ToDo</button>
    </form>
  );
}

export default TodoForm;
