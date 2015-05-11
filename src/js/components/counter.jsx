import React from 'react';

export default class Counter extends React.Component {

  static get propTypes() {
    count: React.PropTypes.number
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">{this.props.count}</div>
    );
  }

}
