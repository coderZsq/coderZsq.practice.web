import * as actionTypes from './constants';

import { getArticles, getArticle } from '@/service/article';

const changeArticlesAction = (res, reload) => ({
  type: actionTypes.CHANGE_ARTICLES,
  articles: res.data,
  reload,
});

const changeArticleAction = (res) => ({
  type: actionTypes.CHANGE_ARTICLE,
  article: res.data[0],
});

export const getArticlesAction = (options, callBack) => {
  const { reload } = options;
  return (dispatch) => {
    getArticles(options).then((res) => {
      dispatch(changeArticlesAction(res, reload));
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
