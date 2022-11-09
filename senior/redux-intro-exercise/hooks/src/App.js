import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, todo2 } from './actions';




const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatchCounter = useDispatch(action=>action.counter);
  let todos = useSelector(state => state.todos);
  const dispatchToDo = useDispatch(action=>action.todos);
  const [inputValue, setInputValue] = useState('');



  function addToDo(e){
    e.preventDefault();
    todo2.title = inputValue
    dispatchToDo(todo2)
  }

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={()=> dispatchCounter(increment)}

      >
        {' + '}
      </button>
      <button onClick={()=> dispatchCounter(decrement)}

      >
        {' - '}
      </button>
      <hr />
      {
        // Implement the todo list
        <form onSubmit={addToDo}>
          <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} type="text" name='newtask' placeholder='introduce new task'></input>
          <button type='submit' disable={!inputValue}>Add</button>
        </form>
      }
      <div>
        {todos.map(eachTask => (
            <div>
              <p>{eachTask.title}</p>
            </div>
        ))
        }
      </div>
    </div>
  );
};

export default App;
