import React, { memo, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { List } from 'antd';

import SQAppHeader from 'components/app-header';
import SQArticle from 'components/article';
import { SQMiddleLayoutWrapper } from '@/style/layout.style';

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

  let totalPage = useRef(-Infinity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getArticlesAction(
        {
          page,
          size: HOME_ARTICLES_SIZE,
        },
        (count) => {
          totalPage.current = Math.floor((count - 1) / HOME_ARTICLES_SIZE) + 1;
        }
      )
    );
  }, [dispatch, page]);

  useLoadMore(() => {
    setTimeout(() => {
      if (page < totalPage.current) {
        setPage(page + 1);
      }
    }, 0);
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
