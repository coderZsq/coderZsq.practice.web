import React, { memo, useEffect } from 'react';

import SQArticle from 'components/article';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getArticlesAction } from '@/pages/home/store/actionCreators';

import { formatDate } from '@/common/util/formats';

export default memo(function SQHome() {
  const { articles } = useSelector(
    (state) => ({
      articles: state.getIn(['home', 'articles']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesAction(1, 'stock'));
  }, [dispatch]);

  return (
    <div>
      {articles.map((item, index) => {
        return (
          <SQArticle
            key={item.id}
            title={item.title}
            content={item.content}
            words={item.words}
            duration={item.duration}
            date={formatDate(item.date, 'yyyy-MM-dd')}
          />
        );
      })}
    </div>
  );
});
