import * as actionTypes from './constants';

import { getArticles, getArticle } from '@/service/article';

const changeArticlesAction = (res) => ({
  type: actionTypes.CHANGE_ARTICLES,
  articles: res.data,
  count: res.count,
});

const changeArticleAction = (res) => ({
  type: actionTypes.CHANGE_ARTICLE,
  article: res.data[0],
});

export const getArticlesAction = (page, type) => {
  return (dispatch) => {
    getArticles(page, type).then((res) => {
      dispatch(changeArticlesAction(res));
    });
  };
};

export const getArticleAction = (id) => {
  return (dispatch) => {
    getArticle(id).then((res) => {
      dispatch(changeArticleAction(res));
    });
  };
};
