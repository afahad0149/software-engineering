import reducers from '../reducers';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducers(undefined, {})
    ).toEqual(
      {
        counter:0,
        todos: []
      }
    );
  });

  it('should handle INCREMENT', () => {
    expect(
      reducers({counter:0, todos:[]}, {
        type: 'INCREMENT'
      })
    ).toEqual({counter:1, todos:[]});
  });

  it('should handle DECREMENT', () => {
    expect(
      reducers({counter:0, todos:[]}, {
        type: 'DECREMENT'
      })
    ).toEqual({counter:-1, todos:[]});
  });
});

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducers(undefined, {})
    ).toEqual(
      {
        counter: 0,
        todos: []
      }
    );
  });

  it('should handle ADD_TODO', () => {
    expect(
      reducers({counter:0,todos:[]}, {
        type: 'ADD_TODO',
        text: 'Run the tests'
      })
    ).toEqual({
      counter:0,
      todos:[
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ]
    });

    expect(
      reducers({
        counter:0,
        todos: [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ]},
      {
        type: 'ADD_TODO',
        text: 'Run the tests'
      }
      )
    ).toEqual({
      counter:0,
      todos: [
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        },
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ]
    });
  });
});
