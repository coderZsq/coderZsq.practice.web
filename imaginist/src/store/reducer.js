import { combineReducers } from 'redux-immutable';

import { reducer as articleReducer } from '@/store/article';

const cReducer = combineReducers({
  article: articleReducer,
});

export default cReducer;
