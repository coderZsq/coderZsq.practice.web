import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { List } from 'antd';

import SQAppHeader from 'components/app-header';
import SQArticle from 'components/article';
import { SQMiddleLayoutWrapper } from '@/style';

import { getArticlesAction } from '@/store/article/actionCreators';
import { useLoadMore } from '@/common/util/hooks';
import { HOME_ARTICLES_SIZE } from '@/common/constants';

export default memo(function SQHomePage() {
  const [page, setPage] = useState(1);

  const { articles } = useSelector(
    (state) => ({
      articles: state.getIn(['article', 'articles']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getArticlesAction({
        page,
        size: HOME_ARTICLES_SIZE,
      })
    );
  }, [dispatch, page]);

  useLoadMore(() => {
    setPage(page + 1);
  });

  return (
    <SQMiddleLayoutWrapper>
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
