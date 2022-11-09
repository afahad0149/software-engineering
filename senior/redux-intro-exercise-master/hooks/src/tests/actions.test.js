import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to increment the counter', () => {
    const expectedAction = {
      type: 'INCREMENT'
    };
    expect(actions.increment()).toEqual(expectedAction);
  });

  it('should create an action to decrement the counter', () => {
    const expectedAction = {
      type: 'DECREMENT'
    };
    expect(actions.decrement()).toEqual(expectedAction);
  });

  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: 'ADD_TODO',
      text
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});
