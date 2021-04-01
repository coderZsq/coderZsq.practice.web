import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  article: {},
  articles: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTICLES:
      return state.set(
        'articles',
        state.get('articles').concat(action.articles)
      );
    case actionTypes.CHANGE_ARTICLE:
      return state.set('article', action.article);
    default:
      return state;
  }
}

export default reducer;
