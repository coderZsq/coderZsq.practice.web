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

export function setArticle(options) {
  const { id, title, type, content, preview, words, duration, date } = options;
  return request({
    url: '/articles/save',
    data: {
      id,
      title,
      type,
      content,
      preview,
      words,
      duration,
      date,
    },
    method: 'post',
  });
}
