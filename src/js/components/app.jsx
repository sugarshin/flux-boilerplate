import React from 'react';

import Counter from './counter'
import Button1 from './button1'
import Button2 from './button2'

import store from '../stores/store'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: store.get()
    }
  }

  _changeCount() {
    this.setState({
      count: store.get()
    })
  }

  componentDidMount() {
    store.addChangeListener(this._changeCount.bind(this))
  }

  componentWillUnmount() {
    store.removeChangeListener(this._changeCount.bind(this))
  }

  render() {
    return (
      <div className="app">
        <Counter count={this.state.count} />
        <Button1 />
        <Button2 />
      </div>
    );
  }

}
