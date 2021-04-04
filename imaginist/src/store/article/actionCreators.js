import * as actionTypes from './constants';

import { getArticles, getArticle } from '@/service/article';

const changeArticlesAction = (res) => ({
  type: actionTypes.CHANGE_ARTICLES,
  articles: res.data,
});

const changeArticleAction = (res) => ({
  type: actionTypes.CHANGE_ARTICLE,
  article: res.data[0],
});

export const getArticlesAction = (options, callBack) => {
  return (dispatch) => {
    getArticles(options).then((res) => {
      dispatch(changeArticlesAction(res));
      callBack(res.count);
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
