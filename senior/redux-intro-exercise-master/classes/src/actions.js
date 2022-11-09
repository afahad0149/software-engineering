export const increment = () => ({
  // REMOVE-START
  type: 'INCREMENT'
  //REMOVE-END
});
// REMOVE-START

export const decrement = () => ({
  type: 'DECREMENT'
});

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text: text
});

export const completed = (id) => ({
  type: 'COMPLETED_TODO',
  id
});
// REMOVE-END
