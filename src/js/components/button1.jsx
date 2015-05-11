import React from 'react';

import actions from '../actions/actions';

export default class Button1 extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleClick() {
    actions.countUp();
  }

  render() {
    return (
      <button type="button" onClick={this._handleClick.bind(this)}>button1 countUp</button>
    );
  }

}
