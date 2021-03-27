import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { List } from 'antd';

import { getArticlesAction } from '@/pages/article/store/actionCreators';

import { useLoadMore } from '@/common/util/hooks';
import { HOME_ARTICLES_SIZE } from '@/common/constants';
import SQArticle from 'components/article';

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
        type: 'stock',
        page,
        size: HOME_ARTICLES_SIZE,
      })
    );
  }, [dispatch, page]);

  useLoadMore(() => {
    setPage(page + 1);
  });

  return (
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
            content={item.content}
          />
        </List.Item>
      )}
    />
  );
});
