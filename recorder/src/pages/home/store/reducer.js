import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  articles: [],
  count: 0,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTICLES:
      return state
        .set('articles', state.get('articles').concat(action.articles))
        .set('count', action.count);
    default:
      return state;
  }
}

export default reducer;
