import dispatcher from '../dispatcher/dispatcher';
import {
  COUNT_UP,
  COUNT_DOWN
} from '../constants/constants';

export default {

  countUp: (val) => {
    dispatcher.dispatch({
      actionType: COUNT_UP
    });
  },

  countDown: (val) => {
    dispatcher.dispatch({
      actionType: COUNT_DOWN
    });
  }

}
