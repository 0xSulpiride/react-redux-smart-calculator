import React, { Component } from 'react';
import Input from '../../containers/Input';
import Keyboard from '../../containers/Keyboard';
import { Dropdown, Menu, Icon } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      showKeyboard: false
    }
  }
  render() {
    return (
      <div className='App'>
        <Menu attached='top'>
          <Dropdown item icon='options' simple>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => this.setState({ showDropdown: !this.state.showDropdown })}
              >
                <Icon name='wrench'/>
                <span className='text'>More Options</span>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => this.setState({ showKeyboard: !this.state.showKeyboard })}
              >
                <Icon name='hand pointer'/>
                <span className='text'>Keyboard</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position='right'>
            <Menu.Item name='github' as='a' href='https://github.com/marie-fourier' target='_blank' />
          </Menu.Menu>
        </Menu>
        {this.state.showKeyboard && <Keyboard />}
        <Input showDropdown={this.state.showDropdown} />
      </div>
    );
  }
}

export default App;
