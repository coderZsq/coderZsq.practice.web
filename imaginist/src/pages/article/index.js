import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Empty } from 'antd';
import moment from 'moment';

import SQAppHeader from 'components/app-header';
import { SQArticlePageWrapper } from './style';
import { SQMiddleLayoutWrapper } from '@/style';

import { getArticleAction } from '@/store/article/actionCreators';
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
    <SQMiddleLayoutWrapper>
      <SQAppHeader />
      <SQArticlePageWrapper>
        <div className="title">{article.title}</div>
        <div className="info">
          <div className="item date">
            {moment(article.date).format('YYYY-MM-DD')}
          </div>
          <div className="item duration">读完需要 {article.duration} 分钟</div>
          <div className="item words">共 {article.words} 字</div>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: article.preview }}
        ></div>
      </SQArticlePageWrapper>
    </SQMiddleLayoutWrapper>
  );
});
