import request from './request';

export function getArticles(page, type) {
  return request({
    url: '/articles',
    params: {
      type,
      page,
    },
  });
}

export function getArticle(id) {
  return request({
    url: '/articles',
    params: {
      id,
    },
  });
}
