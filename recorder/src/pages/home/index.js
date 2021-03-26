import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { List } from 'antd';

import { getArticlesAction } from '@/pages/article/store/actionCreators';

import { useLoadMore } from '@/common/util/hooks';
import { HOME_ARTICLES_SIZE } from '@/common/constants';
import SQArticle from 'components/article';

export default memo(function SQHomePage() {
  const [page, setPage] = useState(1);

  const { articles, totalPage } = useSelector(
    (state) => ({
      articles: state.getIn(['article', 'articles']),
      totalPage: state.getIn(['article', 'totalPage']),
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
    if (page >= totalPage) return;
    setPage(page + 1);
  });

  return (
    <div>
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
    </div>
  );
});
