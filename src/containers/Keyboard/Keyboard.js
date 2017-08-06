import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsTypes from '../../actions';
import * as newtonActions from '../../actions/newton';
import Draggable from 'react-draggable';
import Hint from 'react-hints';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const value = e.target.innerText;
    switch (value) {
      case 'C':
        this.props.setTypeAndText(this.props.type, '');
        break;
      case '+/-':
        this.props.setTypeAndText(actionsTypes.ABS, this.props.text);
        break;
      case '=':
        this.props.calculate(this.props.type, this.props.text);
        break;
      default:
        this.props.setTypeAndText(this.props.type, this.props.text + value);
    }
  }
  render() {
    return (
      <Draggable handle='.cursor' defaultPosition={{ x: 20, y: 20 }}>
        <div id='Keyboard'>
          <Button.Group size='medium' onClick={this.handleClick}>
            <Button.Group vertical>
              <Hint
                id="hint-1"
                message="I am draggable."
                position="right"><Button className='cursor'> </Button></Hint>
              <Button color='black'>C</Button>
              <Button color='green'>7</Button>
              <Button color='green'>4</Button>
              <Button color='green'>1</Button>
              <Button color='green'>0</Button>
            </Button.Group>
            <Button.Group vertical>
              <Button className='cursor'> </Button>
              <Button color='black'>+/-</Button>
              <Button color='green'>8</Button>
              <Button color='green'>5</Button>
              <Button color='green'>2</Button>
              <Button color='black'>.</Button>
            </Button.Group>
            <Button.Group vertical>
              <Button className='cursor'> </Button>
              <Button color='black'>%</Button>
              <Button color='green'>9</Button>
              <Button color='green'>6</Button>
              <Button color='green'>3</Button>
              <Button color='black'>^</Button>
            </Button.Group>
            <Button.Group vertical>
              <Button className='cursor'> </Button>
              <Button color='black'>/</Button>
              <Button color='black'>*</Button>
              <Button color='black'>-</Button>
              <Button color='black'>+</Button>
              <Button color='black'>=</Button>
            </Button.Group>
          </Button.Group>
        </div>
      </Draggable>
    );
  }
}

const mapState = (state) => ({
  type: state.newton.type,
  text: state.newton.payload,
  spinner: state.spinner
});

const mapDispatch = (dispatch) => ({
  setTypeAndText: bindActionCreators(newtonActions.setTypeAndText, dispatch),
  calculate: bindActionCreators(newtonActions.calculate, dispatch),
});

export default connect(mapState, mapDispatch)(Keyboard);