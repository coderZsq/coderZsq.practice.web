import React, { memo, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { List } from 'antd';

import SQAppHeader from 'components/app-header';
import SQGitHubBadge from '@/components/github-badge';
import SQArticle from 'components/article';
import { SQMiddleLayoutWrapper } from '@/style/layout.style';

import { getArticlesAction } from '@/store/article/actionCreators';
import { useLoadMore } from '@/common/util/hooks';
import { HOME_ARTICLES_SIZE } from '@/common/constants';

export default memo(function SQHomePage() {
  const [page, setPage] = useState(1);
  const renderedRef = useRef(false);

  const { articles } = useSelector(
    (state) => ({
      articles: state.getIn(['article', 'articles']),
    }),
    shallowEqual
  );

  const totalPageRef = useRef(-Infinity);
  const dispatch = useDispatch();

  useEffect(() => {
    renderedRef.current = true;
    dispatch(
      getArticlesAction(
        {
          page,
          size: HOME_ARTICLES_SIZE,
          reload: page === 1,
        },
        (count) => {
          totalPageRef.current =
            Math.floor((count - 1) / HOME_ARTICLES_SIZE) + 1;
        }
      )
    );
  }, [dispatch, page]);

  useLoadMore(() => {
    if (page < totalPageRef.current && renderedRef.current) {
      renderedRef.current = false;
      setPage(page + 1);
    }
  });

  return (
    <SQMiddleLayoutWrapper>
      <SQGitHubBadge />
      <SQAppHeader />
      <List
        dataSource={articles}
        renderItem={(item) => (
          <List.Item>
            <SQArticle
              key={item.id}
              id={item.id}
              title={item.title}
              words={item.words}
              duration={item.duration}
              date={item.date}
              preview={item.preview}
            />
          </List.Item>
        )}
      />
    </SQMiddleLayoutWrapper>
  );
});
