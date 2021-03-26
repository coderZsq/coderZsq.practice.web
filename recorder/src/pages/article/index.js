import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Empty } from 'antd';
import marked from 'marked';

import { getArticleAction } from '@/pages/article/store/actionCreators';
import { SQArticleWrapper } from './style';

import { formatDate } from '@/common/util/formats';
import { useBackTop } from '@/common/util/hooks';

export default memo(function SQArticlePage(props) {
  const id = props.match.params.id;

  useBackTop();

  const { article } = useSelector(
    (state) => ({
      article: state.getIn(['article', 'article']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticleAction(id));
  }, [dispatch, id]);

  if (article === void 0) return <Empty />;
  return (
    <SQArticleWrapper>
      <div className="title">{article.title}</div>
      <div className="info">
        <div className="item date">
          {formatDate(article.date, 'yyyy-MM-dd')}
        </div>
        <div className="item duration">读完需要 {article.duration} 分钟</div>
        <div className="item words">共 {article.words} 字</div>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: marked(article.content || '') }}
      ></div>
    </SQArticleWrapper>
  );
});
