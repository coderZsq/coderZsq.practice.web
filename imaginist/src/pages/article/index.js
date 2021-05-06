import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Empty } from 'antd';
import moment from 'moment';

import SQAppHeader from 'components/app-header';
import SQGitHubBadge from '@/components/github-badge';
import { SQArticlePageWrapper } from './style';
import { SQMiddleLayoutWrapper } from '@/style/layout.style';
import { SQMarkdownWrapper } from '@/style/markdown.style';

import { getArticleAction } from '@/store/article/actionCreators';
import { getEditArticle } from '@/service/article';

import { EDITOR_STORAGE } from '@/common/constants';
import { setLocalStorage } from '@/common/util/storages';

export default memo(function SQArticlePage(props) {
  const { id } = props.match.params;

  const { article } = useSelector(
    (state) => ({
      article: state.getIn(['article', 'article']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    dispatch(getArticleAction({ id }));
  }, [dispatch, id]);

  const onClick = () => {
    getEditArticle({ id }).then((res) => {
      setLocalStorage(EDITOR_STORAGE, {
        edit: res.data.content,
        preview: `<h1>${res.data.title}</h1>\n${res.data.preview}`,
      });
      props.history.push(`/editor/${id}`);
    });
  };

  return (
    <SQMiddleLayoutWrapper>
      <SQGitHubBadge />
      <SQAppHeader />
      {article === void 0 ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : (
        <SQArticlePageWrapper>
          <div className="title">{article.title}</div>
          <div className="info">
            <div className="item date">
              {moment(article.date).format('YYYY-MM-DD')}
            </div>
            <div className="item duration">
              读完需要 {article.duration} 分钟
            </div>
            <div className="item words">共 {article.words} 字</div>
            <div className="link" onClick={onClick}>
              编辑
            </div>
          </div>
          <SQMarkdownWrapper
            className="content"
            dangerouslySetInnerHTML={{ __html: article.preview }}
          ></SQMarkdownWrapper>
        </SQArticlePageWrapper>
      )}
    </SQMiddleLayoutWrapper>
  );
});
