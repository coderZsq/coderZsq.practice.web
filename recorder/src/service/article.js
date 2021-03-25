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
