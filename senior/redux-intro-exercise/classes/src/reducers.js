import { combineReducers } from 'redux';

const counter = (/*state = …What's the default state of counter?…, action*/

) => {

};

let nextId = 0;
const todos = (/* Something is missing …*/

) => {
  // Remember to increase nextId every time you create a new action

};

// Combining both reducers
const reducers = combineReducers({
  counter,
  todos,
});

export default reducers;
