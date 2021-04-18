import { instance as request } from './request';

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

export function uploadImg(options) {
  const { img } = options;
  const data = new FormData();
  data.append('img', img);
  return request({
    headers: { 'Content-Type': 'multipart/form-data' },
    url: '/articles/uploadImg',
    data: data,
    method: 'post',
  });
}
