import request from './request';

export function getArticles(options) {
  const { type, page, size } = options;
  return request({
    url: '/articles',
    params: {
      type,
      page,
      size,
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
