import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, {options,value}) {
    this.props.onChange(value, options.filter(k => k.value === value)[0].placeholder);
  }
  render() {
    return (
      <Dropdown
        {...this.props}
        selection
        placeholder='Simplify'
        options={this.props.options} 
        onChange={this.handleChange} />
    );
  }
}