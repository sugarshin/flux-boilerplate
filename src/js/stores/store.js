import EventEmitter from 'eventemitter3';

import dispatcher from '../dispatcher/dispatcher';
import {
  COUNT_UP,
  COUNT_DOWN
} from '../constants/constants';

class Store extends EventEmitter {

  constructor() {
    super();
    this._count = 0;
    dispatcher.register(this.handler.bind(this));
  }

  get() {
    return this._count;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.off('change', callback);
  }

  _countUp() {
    this._count++;
  }

  _countDown(val) {
    this._count--;
  }

  handler(action) {
    switch (action.actionType) {
      case COUNT_UP:
        this._countUp();
        this.emitChange();
        break;

      case COUNT_DOWN:
        this._countDown();
        this.emitChange();

      // case constants.EXAMPLE_ACTION1:
      // case constants.EXAMPLE_ACTION2:
      //   this._stores = action.stores
      //   this.emitChange();
      //   break;

      default:
    }
  }

}

export default new Store
