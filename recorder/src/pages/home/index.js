import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { List } from 'antd';

import { getArticlesAction } from '@/pages/home/store/actionCreators';

import { useLoadMore } from '@/common/util/hooks';
import SQArticle from 'components/article';

export default memo(function SQHome() {
  const [page, setPage] = useState(1);

  const { articles, count } = useSelector(
    (state) => ({
      articles: state.getIn(['home', 'articles']),
      count: state.getIn(['home', 'count']),
    }),
    shallowEqual
  );

  const onScroll = useLoadMore(() => {
    if (page >= count / 10) return;
    setPage(page + 1);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesAction(page, 'stock'));
  }, [dispatch, page]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <div>
      <List
        dataSource={articles}
        renderItem={(item) => (
          <List.Item>
            <SQArticle
              key={item.id}
              title={item.title}
              content={item.content}
              words={item.words}
              duration={item.duration}
              date={item.date}
            />
          </List.Item>
        )}
      />
    </div>
  );
});
