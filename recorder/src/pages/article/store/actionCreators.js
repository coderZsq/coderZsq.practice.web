import * as actionTypes from './constants';

import { getArticles, getArticle } from '@/service/article';
import { HOME_ARTICLES_SIZE } from '@/common/constants';

const changeArticlesAction = (res) => ({
  type: actionTypes.CHANGE_ARTICLES,
  articles: res.data,
});

const changeArticleAction = (res) => ({
  type: actionTypes.CHANGE_ARTICLE,
  article: res.data[0],
});

let curPage = -Infinity;
let totalPage = Infinity;
export const getArticlesAction = (options) => {
  return (dispatch) => {
    const { page } = options;
    if (curPage < page && page <= totalPage) {
      getArticles(options).then((res) => {
        curPage = page;
        totalPage = res.count / HOME_ARTICLES_SIZE;
        dispatch(changeArticlesAction(res));
      });
    }
  };
};

export const getArticleAction = (id) => {
  return (dispatch) => {
    getArticle(id).then((res) => {
      dispatch(changeArticleAction(res));
    });
  };
};
