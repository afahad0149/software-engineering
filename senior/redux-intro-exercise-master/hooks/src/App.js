import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// REMOVE-START
import { useDispatch } from 'react-redux';
import { addTodo, completed, decrement, increment } from './actions';
//REMOVE-END

const App = () => {
  const counter = useSelector(state => state.counter);
  // REMOVE-START
  const [todo, setTodo] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  };

  const handleChange = ({ target }) => setTodo(target.value);
  // REMOVE-END
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button
        // REMOVE-START
        onClick={() => dispatch(increment())}
        // REMOVE-END
      >
        {' + '}
      </button>
      <button
        // REMOVE-START
        onClick={() => dispatch(decrement())}
        // REMOVE-END
      >
        {' - '}
      </button>
      <hr />
      {
        // Implement the todo list
        // REMOVE-START
      }
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={todo} />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            key={todo.id}
            onClick={() => dispatch(completed(todo.id))}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      {
        // REMOVE-END
      }
    </div>
  );
};

export default App;
