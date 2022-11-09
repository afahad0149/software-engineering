import { combineReducers } from 'redux';

const counter = (/*state = …What's the default state of counter?…, action*/
  // REMOVE-START
  state = 0,
  action
  // REMOVE-END
) => {
  // REMOVE-START
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
  // REMOVE-END
};

let nextId = 0;
const todos = (/* Something is missing …*/
  // REMOVE-START
  state = [],
  action
  // REMOVE-END
) => {
  // Remember to increase nextId every time you create a new action
  // REMOVE-START
  switch (action.type) {
  case 'ADD_TODO': {
    const id = nextId;
    nextId++;
    const { text } = action;
    return [{ id, text, completed: false }].concat(state);
  }
  case 'COMPLETED_TODO': {
    const { id } = action;
    return state.map((todo) => (
      { ...todo, 
        completed: todo.id === id 
          ? !todo.completed 
          : todo.completed
      }));
  }
  default:
    return state;
  }
  // REMOVE-END
};

// Combining both reducers
const reducers = combineReducers({
  counter,
  todos,
});

export default reducers;
