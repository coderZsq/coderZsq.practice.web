import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  article: {},
  articles: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTICLES:
      let result = null;
      const key = 'articles';
      const value = action.articles;
      if (action.reload) {
        result = state.set(key, value);
      } else {
        result = state.set(key, state.get(key).concat(value));
      }
      return result;
    case actionTypes.CHANGE_ARTICLE:
      return state.set('article', action.article);
    default:
      return state;
  }
}

export default reducer;
