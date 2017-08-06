import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import Dropdown from '../../components/Dropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newtonActions from '../../actions/newton';

const dropdownOptions = [
  { text: 'Simplify', value: 'simplify', key: 'simplify', placeholder: '2^2+2(2)' },
  { text: 'Factor', value: 'factor', key: 'factor', placeholder: 'x^2 + 2x' },
  { text: 'Derive', value: 'derive', key: 'derive', placeholder: 'x^2+2x' },
  { text: 'Integrate', value: 'integrate', key: 'integrate', placeholder: 'x^2+2x' },
  { text: 'Cos', value: 'cos', key: 'cos', placeholder: 'pi' },
  { text: 'Sin', value: 'sin', key: 'sin', placeholder: '0' },
  { text: 'Tangent', value: 'tangent', key: 'tangent', placeholder: '0' },
  { text: 'Arccos', value: 'arccos', key: 'arccos', placeholder: '1' },
  { text: 'Arcsin', value: 'arcsin', key: 'arcsin', placeholder: '0' },
  { text: 'Arctan', value: 'arctan', key: 'arctan', placeholder: '0' },
  { text: 'Abs', value: 'abs', key: 'abs', placeholder: '-1' },
  { text: 'Logarithm', value: 'logarithm', key: 'logarithm', placeholder: '2l8' }
];

const mapState = (state) => ({
  type: state.newton.type,
  text: state.newton.payload,
  spinner: state.spinner
});

const mapDispatch = (dispatch) => ({
  calculate: bindActionCreators(newtonActions.calculate, dispatch),
  setTypeAndText: bindActionCreators(newtonActions.setTypeAndText, dispatch)
});

export default connect(mapState, mapDispatch)(class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'simplify',
      placeholder: '2^2+2'
    }
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      input: nextProps.text,
      spinner: nextProps.spinner
    });
  }
  handleDropdownChange(operation, placeholder) {
    this.props.setTypeAndText(operation, this.props.text);
    this.setState({
      placeholder
    })
  }
  handleInputChange(e, {value}) {
    this.props.setTypeAndText(this.props.type, value);
  }
  handleClick() {
    this.props.calculate(this.props.type, this.props.text);
  }
  render() {
    const {spinner} = this.props;
    return (
      <div id="Input">
        <Input
          placeholder={this.state.placeholder}
          onChange={this.handleInputChange}
          fluid
          value={this.props.text}
        >
          {this.props.showDropdown && <Dropdown options={dropdownOptions} onChange={this.handleDropdownChange} value={this.props.type.toLowerCase()} />}
          <input disabled={spinner || null} />
          <Button
            loading={spinner || null}
            onClick={this.handleClick}
            type='submit'
            color='blue'
            icon='calculator'
            content='Calculate'
            labelPosition='right' />
        </Input>
      </div>
    );
  }
});