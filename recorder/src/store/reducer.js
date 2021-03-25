import { combineReducers } from 'redux-immutable';

import { reducer as homeReducer } from '@/pages/home/store';

const cReducer = combineReducers({
  home: homeReducer,
});

export default cReducer;
