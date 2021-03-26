import * as actionTypes from './constants';

import { getArticles } from '@/service/article';

const changeArticlesAction = (res) => ({
  type: actionTypes.CHANGE_ARTICLES,
  articles: res.data,
  count: res.count,
});

export const getArticlesAction = (page, type) => {
  return (dispatch) => {
    getArticles(page, type).then((res) => {
      dispatch(changeArticlesAction(res));
    });
  };
};
