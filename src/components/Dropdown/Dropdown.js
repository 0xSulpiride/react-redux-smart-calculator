import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, { value }) {
    console.log(value);
  }
  render() {
    return (
      <Dropdown placeholder='Simplify' selection options={this.props.options} onChange={this.handleChange} />
    );
  }
}