import React from 'react';

import actions from '../actions/actions';

export default class Button2 extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleClick() {
    actions.countDown();
  }

  render() {
    return (
      <button type="button" onClick={this._handleClick.bind(this)}>button2 countDown</button>
    );
  }

}
