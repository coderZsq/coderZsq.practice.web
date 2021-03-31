import { combineReducers } from 'redux-immutable';

import { reducer as articleReducer } from '@/pages/article/store';

const cReducer = combineReducers({
  article: articleReducer,
});

export default cReducer;
