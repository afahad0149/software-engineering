import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';
// REMOVE-START
import { decrement, addTodo, completed } from './actions';
//REMOVE-END

class App extends Component {
  // REMOVE-START
  handleInput = (e) => {
    if ((e.key === 'Enter' || e.type === 'click') && this.input.value) {
      this.props.addTodo(this.input.value);
      this.input.value = '';
    }
  }
  // REMOVE-END
  render () {
    // REMOVE-START
    const { todos, increment, decrement, completed } = this.props;
    // REMOVE-END
    return (
      <div>
        <h1>Counter : {this.props.counter}</h1>
        <button
          // REMOVE-START
          onClick={increment}
          // REMOVE-END
        >+</button>
        <button 
          // REMOVE-START
          onClick={decrement}
          // REMOVE-END
        > - </button>
        <hr/>
        { 
          // Implement the todo list
          // REMOVE-START
        }
        <h1>Todo</h1>
        <input type="text" onKeyPress={this.handleInput} ref={r => this.input = r}/>
        <button onClick={this.handleInput}>Add task</button>
        <ul>
          {todos.map((todo) => 
            <li 
              style={{
                textDecoration: todo.completed 
                  ? 'line-through' 
                  : 'none'
              }}
              key={todo.id} 
              onClick={() => completed(todo.id)}> 
              {todo.text} 
            </li>
          )}
        </ul>
        {// REMOVE-END
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // Map your state to props
  // REMOVE-START
  counter: state.counter,
  todos: state.todos,
  //REMOVE-END
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  increment: () => dispatch(increment()),
  // REMOVE-START
  decrement: () => dispatch(decrement()),
  addTodo: (text) => dispatch(addTodo(text)),
  completed: (id) => dispatch(completed(id)),
  //REMOVE-END
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
