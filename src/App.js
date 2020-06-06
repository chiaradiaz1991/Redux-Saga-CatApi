import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {

    const { fetching, cat, onRquestCat, err } = this.props;
    return (
      <div className="App">
        <header>
          {
            cat ? (
              <img src={cat} alt="photo-cat" style={{ width: 300}} />
            ) : (
                <img src={logo} style={{ width: 300}} alt="logo" />
              )
          }
          <h1 className="App-title">React Redux Saga Application!</h1>
        </header>
        {
          fetching ? (
            <button disabled>Fetching</button>
          ) : (
              <button onClick={onRquestCat}>Request a Cat!</button>
            )
        }

        {
          err && <p>something went wrong!</p>
        }
      </div>
    );
  }
}

const mapStateToProps = state => { // mapStateToProps to make current state of fetching, cat and error available as props in this component
  return {
    fetching: state.fetching,
    cat: state.cat,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => { // dispatches a REQUEST action to the Store
  return {
    onRquestCat: () => dispatch({ type: 'REQUEST' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App); // export this “reduxed” version of it
