import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';

class App extends Component {

  render () {

    return (
      <div>
        <h1>Counter : {this.props.counter}</h1>
        <button

        >+</button>
        <button 

        > - </button>
        <hr/>
        { 
          // Implement the todo list

        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // Map your state to props

});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  increment: () => dispatch(increment()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
