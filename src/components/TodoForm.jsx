import React from 'react'
import { useState } from 'react'



function TodoForm() {
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }



  return (
   <form action="" className="todo-form" onSubmit={handleSubmit}>
    <input type="text" 
    placeholder=' add todo'
    value={input}
    name='text' className='todo-input'
    />
    <button className="todo-button">Add ToDo</button>


   </form>
  )
}

export default TodoForm