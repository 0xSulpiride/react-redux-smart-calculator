import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import Dropdown from '../../components/Dropdown';

const dropdownOptions = [
  { text: 'Simplify', value: 'simplify', key: 'simplify' },
  { text: 'Factor', value: 'factor', key: 'factor' },
  { text: 'Derive', value: 'derive', key: 'derive' },
  { text: 'Integrate', value: 'integrate', key: 'integrate' },
  { text: 'Cos', value: 'cos', key: 'cos' },
  { text: 'Sin', value: 'sin', key: 'sin' },
  { text: 'Tangent', value: 'tangent', key: 'tangent' },
  { text: 'Arccos', value: 'arccos', key: 'arccos' },
  { text: 'Arcsin', value: 'arcsin', key: 'arcsin' },
  { text: 'Arctan', value: 'arctan', key: 'arctan' },
  { text: 'Abs', value: 'abs', key: 'abs' },
  { text: 'Logarithm', value: 'logarithm', key: 'logarithm' }
];

export default class extends Component {
  render() {
    return (
      <div id="Input">
        <Input
          label={<Dropdown options={dropdownOptions} />}
          labelPosition='left'
          fluid
          loading={null}
          placeholder='2^2+2'
          action={{
            color: 'blue', labelPosition: 'right', icon: 'calculator', content: 'Calculate'
          }} />
      </div>
    );
  }
}