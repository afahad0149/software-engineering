import { combineReducers } from 'redux';

const counter = (state = 0, action

) => {
  if ( action.type === 'INCREMENT') return state + 1;
  if (action.type === 'DECREMENT') return state - 1;
  return state;

};
let nextId = 0;
const todos = (state = [], action

) => {
  if (action.type === 'ADDTODO') {
    const id = state.length + 1;
    const newTodo = {
      id: id,
      title: action.title,
    }
    console.log(state)
    return [newTodo, ...state]

  };
  return state
  // Remember to increase nextId every time you create a new action

};

// Combining both reducers
const reducers = combineReducers({
  counter,
  todos,
});

export default reducers;
