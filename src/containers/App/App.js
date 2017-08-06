import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newtonActions from '../../actions/newton';
import Input from '../Input';

class App extends Component {
  render() {
    const activeItem = 'account';
    return (
      <div className="App">
        <Input />
      </div>
    );
  }
}

const mapState = (state) => ({
  type: state.newton.type,
  text: state.newton.payload,
  spinner: state.spinner
});

const mapDispatch = (dispatch) => newtonActions;

export default connect(mapState, newtonActions)(App);
